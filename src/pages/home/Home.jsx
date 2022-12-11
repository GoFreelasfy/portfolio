import {
  React,
  Header,
  Footer,
  ModalProjetos,
  BannerMain,
  Servicos,
  WhatsappButton,
  Diferenciais,
  SectionFaq,
  FaleConosco,
  Tecnologias,
  Sobre ,
} from "../../components"

export default function Home() {
  return (
    <>
      <Header />
      <BannerMain />
      <Servicos />
      <Diferenciais/>
      <Sobre/>
      <ModalProjetos />
      <Tecnologias/>
      <SectionFaq/>
      <FaleConosco/>
      <WhatsappButton/>
      <Footer />
    </>
  );
}
