import React from "react";

const CertContainer = ({
  data: {
    TITLE,
    DATE_COMPLETED,
    EXPIRATION_DATE,
    CREDENTIAL_LINK,
    CREDENTIAL_ID,
    SHORT_DESCRIPTION,
  },
}) => {
  return (
    <div>
      <h4 className="text-lg font-medium font-serif mb-1">{TITLE}</h4>

      <p className="text-neutral-400 text-sm">
        Issued {DATE_COMPLETED} • {EXPIRATION_DATE}
      </p>
      <a
        href={CREDENTIAL_LINK}
        target="_blank"
        className="text-neutral-400 text-sm group"
      >
        Credential ID{" "}
        <span className="group-hover:underline">{CREDENTIAL_ID}</span>
      </a>

      <p className="mt-4 text-sm">{SHORT_DESCRIPTION}</p>
    </div>
  );
};
export default CertContainer;
