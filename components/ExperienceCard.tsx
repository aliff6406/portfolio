import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

interface Props {
  title: string;
  description: string[];
  dates: string;
  company: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function ExperienceCard({
  title,
  description,
  dates,
  company,
  location,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center rounded-full bg-white">
        <Avatar className="m-auto size-12 border">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-muted-foreground text-sm">{dates}</time>
        )}
        <h2 className="text-xl font-semibold leading-none">{title}</h2>
        <div className="mb-3 flex items-center justify-between">
          {company && (
            <p className="text-muted-foreground text-md">{company}</p>
          )}
          {location && (
            <p className="text-muted-foreground text-md">{location}</p>
          )}
        </div>
        {description && (
          <ul className="list-disc space-y-2 leading-7">
            {description.map((description, idx) => (
              <li key={idx}>
                <span className="dark:prose-invert text-muted-foreground text-md">
                  {description}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
