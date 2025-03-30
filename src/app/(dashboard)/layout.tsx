import MaxWidth from "@/components/MaxWidthComponent";

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <MaxWidth>{children}</MaxWidth>
  )
}
