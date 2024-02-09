import { DocsTabs } from '../components/DocsTabs';
import { PageHeader } from '../components/PageHeader';
import { Shell } from '../components/Shell';
import { PACKAGE_DATA } from '../data';
import docgen from '../docgen.json';
import Docs from '../docs.mdx';

export default function HomePage() {
  return (
    <Shell>
      <PageHeader data={PACKAGE_DATA} />
      <DocsTabs
        docgen={docgen}
        componentsProps={['RingsProgress']}
        //componentsStyles={['RingsProgress']}
        //stylesApiData={STYLES_API_DATA}
      >
        <Docs />
      </DocsTabs>
    </Shell>
  );
}
