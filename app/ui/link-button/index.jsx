import {Button} from "@/app/ui";
import Link from "next/link";

export const ButtonLink = ({children, onClick, className, link, download}) => {
  return (
    <Link href={link} download={download} target="_blank">
      <Button className={className} onClick={onClick}>
        {children}
      </Button>
    </Link>
  )
}