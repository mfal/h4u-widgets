import React, { FC } from "react";
import ContentLoader from "react-content-loader";

export const MatchesSkeletonView: FC = () => (
  <ContentLoader
    height={160}
    width={580}
    speed={1}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="8" y="18" rx="5" ry="5" width="119" height="8" />
    <rect x="8" y="46" rx="5" ry="5" width="119" height="8" />
    <rect x="8" y="75" rx="5" ry="5" width="119" height="8" />
    <rect x="7" y="105" rx="5" ry="5" width="119" height="8" />
    <rect x="174" y="17" rx="5" ry="5" width="189" height="8" />
    <rect x="174" y="45" rx="5" ry="5" width="209" height="8" />
    <rect x="174" y="74" rx="5" ry="5" width="199" height="8" />
    <rect x="173" y="104" rx="5" ry="5" width="209" height="8" />
    <rect x="479" y="16" rx="5" ry="5" width="90" height="8" />
    <rect x="479" y="44" rx="5" ry="5" width="90" height="8" />
    <rect x="479" y="73" rx="5" ry="5" width="90" height="8" />
    <rect x="478" y="103" rx="5" ry="5" width="90" height="8" />
  </ContentLoader>
);
