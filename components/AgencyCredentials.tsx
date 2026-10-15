import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Arrow } from "./SiteUI";

const agencies = [
  {
    name: "Unified Team Diving",
    shortName: "UTD",
    credential: "UTD Instructor #225",
    href: "https://utdscubadiving.com/",
    file: "utd-logo",
  },
  {
    name: "Divers Alert Network",
    shortName: "DAN",
    credential: "DAN first aid instructor",
    href: "https://dan.org/",
    file: "dan-logo",
  },
];

export function AgencyCredentials() {
  return (
    <div className="credentials-rail">
      <div className="container credentials-inner">
        <span className="credentials-caption">
          A personal approach.
          <br />
          <strong>A shared standard.</strong>
        </span>
        {agencies.map((agency) => {
          const filename = ["svg", "png", "webp"]
            .map((extension) => `/brand/${agency.file}.${extension}`)
            .find((file) =>
              fs.existsSync(path.join(process.cwd(), "public", file)),
            );
          return (
            <a
              key={agency.shortName}
              href={agency.href}
              target="_blank"
              rel="noopener noreferrer"
              className="credential-item"
            >
              {filename ? (
                <Image
                  src={filename}
                  alt={agency.name}
                  width={140}
                  height={56}
                  unoptimized
                />
              ) : (
                <span className="credential-name">{agency.name}</span>
              )}
              <span>
                {agency.credential} <Arrow diagonal />
              </span>
            </a>
          );
        })}
        <div className="credential-attention">
          <strong>3:1 maximum</strong>
          <span>
            Students to instructor.
            <br />
            Room to focus on you.
          </span>
        </div>
      </div>
    </div>
  );
}
