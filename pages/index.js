import Card from "../components/card";

export default function IndexPage() {
  const countries = [
    { country: "australia", code: "au" },
    { country: "belgium", code: "be" },
    { country: "canada", code: "ca" },
    { country: "denmark", code: "dk" },
    { country: "england", code: "gb-eng" },
    { country: "france", code: "fr" },
    { country: "germany", code: "de" },
    { country: "italy", code: "it" },
    { country: "netherlands", code: "nl" },
    { country: "norway", code: "no" },
    { country: "scotland", code: "gb-sct" },
    { country: "spain", code: "es" },
    { country: "united states", code: "us" },
  ];
  const host = "https://bna-scorecards.s3.amazonaws.com";
  const scorecard_url = host + "/2021/v15/";
  const archives = host + "/index.html";

  return (
    <>
      {/* Title */}
      <div className="py-16">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 text-5xl font-bold font-dharma leading-none tracking-tight text-gray-900 md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{" "}
            Our countries
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Here are the brochure bundles for the countries where we ran BNA
            analyses.
          </p>
        </div>
      </div>

      {/* Country cards */}
      <div className="flex flex-wrap items-center justify-center mb-16">
        {countries.map((country) => (
          <Card
            key={country.code}
            base_url={scorecard_url}
            country={country}
          ></Card>
        ))}
      </div>

      {/* Archives */}
      <div className="flex justify-center mb-16">
        <p>
          <a
            href={archives}
            alt="Past Scorecards"
            className="text-pfb-bright-cyan"
          >
            For past scorecards, visit our archives ⇾
          </a>
        </p>
      </div>
    </>
  );
}
