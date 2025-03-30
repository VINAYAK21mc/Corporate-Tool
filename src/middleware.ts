import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export default clerkMiddleware( async (auth,req:NextRequest)=>{

    const {userId,sessionClaims,redirectToSignIn}=await auth()

    console.log(sessionClaims?.metadata)
    if(isPublicRoute(req))return NextResponse.next();

    if(!userId && isPublicRoute(req)){
        return redirectToSignIn({
            returnBackUrl:req.url
        })
    }

    if(!userId && isOnboardingRoute(req)){
        return NextResponse.next()
    }

    if(userId&& sessionClaims?.metadata?.onboardingCompleted && isOnboardingRoute(req)){
        if(sessionClaims?.metadata?.role==="ADMIN"){
            const adminUrl=new URL("/admin",req.url)
            return NextResponse.redirect(adminUrl)
        }else{
            const employeeUrl= new URL("/employee",req.url)
            return NextResponse.redirect(employeeUrl)
        }
    }

    if(userId&& !sessionClaims?.metadata?.onboardingCompleted && !isOnboardingRoute(req)){
        const onboardingUrl=new URL('/onboarding',req.url)
        return NextResponse.redirect(onboardingUrl);
    }

    

    if(isAdminRoute(req)){
        if(sessionClaims?.metadata.role==="ADMIN")
            return NextResponse.next()
        else{
            const homepageurl=new URL('/',req.url)
            return NextResponse.redirect(homepageurl)
        }
    }

    if(isEmployeeRoute(req)){
        if(sessionClaims?.metadata.role==="EMPLOYEE")
            return NextResponse.next()
        else{
            const homepageurl=new URL('/',req.url)
            return NextResponse.redirect(homepageurl)
        }
    }

    if(userId){
        return NextResponse.next()
    }
    
    return NextResponse.next()
});

const isPublicRoute=createRouteMatcher(['/','/api/webhooks/(.*)'])

const isOnboardingRoute=createRouteMatcher(['/onboarding'])

const isAdminRoute=createRouteMatcher(['/admin','/admin/(.*)'])

const isEmployeeRoute=createRouteMatcher(['/employee','/employee/(.*)'])


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};