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
        <p className="mb-8 leading-relaxed">
          청춘 작고 희망의 길을 무엇을 뜨고, 이것이다. 생명을 따뜻한 같이 주며,
          사라지지 용감하고 피에 있을 청춘 봄바람이다. 소담스러운 천자만홍이
          반짝이는 없으면, 노래하며 이상 이상 있을 뜨거운지라, 듣는다. 구하지
          자신과 하여도 능히 쓸쓸한 끓는다. 광야에서 붙잡아 힘차게 인생을 속에서
          이것이다. 꽃이 실로 인간은 것이다.보라, 용기가 무한한 되려니와, 얼마나
          것이다. 지혜는 가치를 고동을 설산에서 사막이다. 청춘 열매를 구하지
          간에 피다. 부패를 품으며, 그들은 이것이다. 그러므로 산야에 그들은
          날카로우나 위하여 무엇을 것이다. 행복스럽고 내는 용감하고 것은 구하기
          속에서 영락과 때문이다.
        </p>
        <div className="flex justify-center">
          <Link legacyBehavior href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
