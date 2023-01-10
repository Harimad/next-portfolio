import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StandardImageList from "./Image";
import { lineHeight } from "@mui/system";

const itemData1 = [
  {
    img: "/images/1-1.png",
    title: "1-1",
  },
  {
    img: "/images/1-2.jpg",
    title: "1-2",
  },
];

const itemData3 = [
  {
    img: "/images/3-1.png",
    title: "3-1",
  },
  {
    img: "/images/3-2.png",
    title: "3-2",
  },
];

const itemData4 = [
  {
    img: "/images/4-1.jpg",
    title: "4-1",
  },
  {
    img: "/images/4-2.jpg",
    title: "4-2",
  },
];

const itemData4_2 = [
  {
    img: "/images/4-3.png",
    title: "4-3",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="btn-project" onClick={handleOpen}>
        자기소개서(Modal)
      </button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} className="dark:bg-slate-800">
          <Typography
            id="keep-mounted-modal-title"
            className="dark:border-gray-300"
            variant="h6"
            component="h1"
          >
            [📌 기록을 일상으로]
          </Typography>
          <Typography
            id="keep-mounted-modal-description"
            sx={{ mt: 2 }}
            component="h2"
          >
            개발 공부를 시작하며 이해한 내용을 더 오래 기억하기 위해 블로그를
            꾸준히 작성하였습니다. 일기와 같이 개인적인 정리를 위해 시작한
            블로그였으나, 시간이 지날수록 다른 사람들에게도 도움이 되는 공유의
            수단으로 활용하게 되었습니다. 공유하는 글쓰기를 목적으로 삼자 모두가
            이해하기 쉬운 글을 쓰도록 노력하게 되었고 나만의 일기가 아닌 쉽게
            참고할 수 있는 책처럼 읽을 수 있는 개발 블로그를 작성하고 있습니다.
          </Typography>
          <StandardImageList itemData={itemData1} col={2} />
          <Typography
            id="keep-mounted-modal-description"
            sx={{ mt: 2 }}
            component="h2"
          >
            이를 통해 글쓰기는{" "}
            <b>
              <i>개발 학습에도 핵심적인 역할</i>
            </b>
            을 한다는 것을 배웠습니다. 본격적인 코드 작성 전 어떤 방식으로{" "}
            <b>
              <i>구조화</i>
            </b>{" "}
            할 것인지 브레인스토밍 하는 절차가 글쓰기와 일맥상통한다는 깨달음을
            얻었습니다. 블로그 운영을 통해{" "}
            <b>
              <i>개발 절차를 루틴화</i>
            </b>
            하고 스스로
            <b>
              <i>아는 것과 모르는 것을 명확히 구분해 학습의 효율성</i>
            </b>
            을 높일 수 있었습니다. 특히 청년취업사관학교 새싹(SeSAC) 과정을
            수강하며{" "}
            <b>
              <i>동료 교육생들에 설명할 기회</i>
            </b>
            가 많았습니다. 체계적으로 배운 내용을 정리해둔 덕에 동료들도 쉽게
            지식을 쌓을 수 있었고 제가 아는 내용을 더욱 탄탄히 복습할 수
            있었습니다.{" "}
            <b>
              <i>
                내가 아는 것을 남과 나누고, 함께 발전할 수 있는 프론트엔드
                개발자가 되겠습니다.
              </i>
            </b>
          </Typography>
          <br />
          <Typography
            id="keep-mounted-modal-title"
            className="dark:border-gray-300"
            variant="h6"
            component="h1"
          >
            [📌 제품 기획의 경험이 개발 경험에 스며들다.]
          </Typography>
          <Typography
            id="keep-mounted-modal-description"
            sx={{ mt: 2 }}
            component="h2"
          ></Typography>
          개발에 입문하기 전 제품을 기획하고 출시한 경험이 있습니다. 마케터,
          디자이너인 지인과 함께 ‘핑꾸닭’이라는 캐릭터를 기획해 핸드폰 케이스를
          판매해보았습니다. 캐릭터를 만들기 전 ‘핑꾸닭’은 어떤 정체성을
          가졌는지, 이 캐릭터만의 몸짓과 언어, 표정에 대해 고민했고 한 달 여간의
          구체화 기간을 거쳐 캐릭터를 구현할 수 있었습니다. 핑계를 대는 귀여운
          핑크색 닭이라는 독특한 이미지를 살려 소위 ‘병맛’이라고 하는 엉뚱한
          캐릭터로 사람들의 관심을 끌 수 있었습니다.
          <StandardImageList itemData={itemData3} col={2} />
          <Typography
            id="keep-mounted-modal-description"
            sx={{ mt: 2 }}
            component="h2"
          >
            개발 공부를 하며{" "}
            <b>
              <i>개발도 제품 기획과 크게 다르지 않다</i>
            </b>
            는 것을 배웠습니다. 무언가를 개발하고자 할 때 역시 기획 단계를 거쳐
            디자인을 구상하고, 어떤 방식으로 파일과 폴더를 구분 할지를
            우선적으로 결정해야 합니다.{" "}
            <b>
              <i>
                체계적인 기획 단계를 걸쳐야만 효율적으로 개발할 수 있습니다.
              </i>
            </b>{" "}
            계획 없이 무작정 코딩부터 시작하게 된다면 결국엔 원하던 성과를 얻기
            힘들다는 것을 몇 번의 프로젝트 경험을 통해 깨달았습니다. 기술 학습을
            통해 진정한 기획의 중요성을 알게 되었습니다.{" "}
            <b>
              <i>
                체계적인 기획으로 생각하며 코드를 짜는, 구조화하는 프로그래머가
                되겠습니다.
              </i>
            </b>
          </Typography>
          <br />
          <Typography
            id="keep-mounted-modal-title"
            className="dark:border-gray-300 mt-3"
            variant="h6"
            component="h1"
          >
            [📌 의사소통 능력은 나만의 또 다른 장점]
          </Typography>
          <Typography
            id="keep-mounted-modal-description"
            sx={{ mt: 2 }}
            component="h2"
          >
            4년간 영어 강사로 근무하며 수강생들의 성장에 기여한 경험이 있습니다.
            매일 수업을 하며 학생들을 마주했기에 소통과 전달 역량을 향상 시킬 수
            있었습니다. 동시에 어르신 한글 교육 봉사, 학교 밖 청소년을 위한
            검정고시 교육 봉사를 각 3년간 지속하며 다양한 사람들과 어울리고
            소통하는 방법을 체득할 수 있었습니다. 이와 같은 사회 경험으로 원만한
            대인 관계를 유지할 수 있었고, 소통 역량이 내가 해내고자 하는 것을 더
            쉽게 이룰 수 있는 소중한 능력이라는 것을 깨달을 수 있었습니다.
          </Typography>
          <Typography
            id="keep-mounted-modal-description"
            sx={{ mt: 2 }}
            component="h2"
          >
            <StandardImageList itemData={itemData4} col={2} />
            원만한 소통 역량은{" "}
            <b>
              <i>팀 프로젝트를 진행할 때에 가장 큰 도움</i>
            </b>
            이 되었습니다. 자칫 내 입장만 생각하게 될 수 있는 상황에서 서로의
            의견을 넓게 볼 수 있도록 중재하는 역할을 자주 맡았고, 덕분에
            프로젝트가 잘 마무리될 수 있었다는 이야기도 종종 들어왔습니다.
            상대를 배려하는 소통하는 방식에 자신감을 얻어 내 의견을 말하는 것,
            대중 앞에서 발표하는 것 역시 두려워하지 않을 수 있었습니다. 개발자는
            하나의 서비스를 위해 다양한 직군의 동료들과 협업 해야 합니다.{" "}
            <b>
              <i>함께 일할 때 즐거운, 배려하며 소통하는 개발자가 되겠습니다.</i>
            </b>
          </Typography>
          <StandardImageList itemData={itemData4_2} col={1} />
        </Box>
      </Modal>
    </div>
  );
}
