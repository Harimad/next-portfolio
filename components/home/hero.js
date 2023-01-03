import Animation from "./animation";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요!
          <br className="hidden lg:inline-block" />
          기록하는 프론트엔드 개발자 이성현 입니다🤗
        </h1>
        <p className="leading-relaxed">
          유지 보수에 좋은 코드를 고민하지만, 사용자와 서비스를 먼저 생각하는
          개발자를 지향합니다.
        </p>
        <p>기록을 일상처럼 여깁니다.</p>
        <p>새로운 기술과 최신 동향을 알아가는 것을 좋아합니다.</p>
        <p>의사소통의 중요성을 알고 있습니다. </p>
        <p>항상 저의 미래가 더 기대되도록 꾸준히 발전하고 있습니다.</p>
        <p>운동하는 것을 좋아합니다.</p>
        <div className="mt-5 flex justify-center">
          <Link legacyBehavior href="/projects">
            <a className="btn-project mr-3">프로젝트</a>
          </Link>
          <button>
            <a href="https://velog.io/@harimad" className="btn-project">
              블로그
            </a>
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
