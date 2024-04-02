// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import blobSolutions from "../../public/img/blob-solutions.png";
import blobCreativity from "../../public/img/blob-creativity.png";
import blobLearning from "../../public/img/blob-learning.png";
import blobResponsibility from "../../public/img/blob-responsibility.png";

import Heading from "../ui/Heading";
import Section from "../ui/Section";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 5rem 10rem;
    height: 50vh;
`

const Image = styled.img`
  height: 35rem;
`;

function SkillsOverview({ currentElement }) {
  return (
    <Section
      id="My Skills"
      className="observe-me"
      opacity={currentElement === "My Skills" ? "visible" : "hidden"}
    >
      <Heading textAlign="right" width="small" margin="right">
        another useful skills that I can bring
      </Heading>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Container>
            <Heading textAlign="left" width="small" margin="left">
              problem solution
            </Heading>
            <p>Learning programming languages opened whole new world for me. </p>
            <Image src={blobSolutions}></Image>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Heading textAlign="left" width="small" margin="left">
              creativity
            </Heading>
            <p>I love art from my childhood. When i come with some web app idea, it cannot just do things.
              It must also look beautiful. I want my pages to be a piece of art. </p>
            <Image src={blobCreativity}></Image>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Heading textAlign="left" width="small" margin="left">
              fast learning
            </Heading>
            <p>Currently i learn new stuff by evenings after 9 hours of work. I made amazing progress and i believe
              that in your company my potential fully explodes and i will be very good asset to your team</p>
            <Image src={blobLearning}></Image>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Heading textAlign="left" width="small" margin="left">
              responsibility
            </Heading>
            <Image src={blobResponsibility}></Image>
          </Container>
        </SwiperSlide>
        
      </Swiper>
    </Section>
  );
}

export default SkillsOverview;
