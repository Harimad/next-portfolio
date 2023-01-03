import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>Tim`s portfolio</title>
        <meta name="description" content="Tim의 포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3 className="mt-3 text-center text-4xl font-bold sm:text-5xl">
        총 프로젝트 :
        <span className="pl-4 text-blue-500">{projects.results.length}</span>
      </h3>

      <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
        {projects.results.map(aProject => (
          <ProjectItem key={aProject.id} data={aProject} />
        ))}
      </div>
    </Layout>
  );
}

// 빌드 타임에 호출
// export async function getStaticProps() {

// 각 요청 때마다 호출
export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          "property": "Name",
          "direction": "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  const projectNames = projects.results.map(
    aProject => aProject.properties.Name.title[0].plain_text
  );

  // console.log(`projectNames : ${projectNames}`);
  // console.log(projects);

  return {
    props: { projects }, // will be passed to the page component as props
    // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
    // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
  };
}
