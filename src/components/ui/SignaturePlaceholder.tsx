import Image from "next/image";

export function SignaturePlaceholder({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/signature.svg"
      alt="Signature of Mr Najib Daulatzai"
      width={928}
      height={576}
      unoptimized
      className={`h-14 w-auto max-w-[min(100%,280px)] opacity-90 ${className}`.trim()}
    />
  );
}
