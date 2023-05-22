import styles from "./SobreMim.module.css";

import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá! Eu sou o Daniel!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Daniel de terno"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Cearense, formado em Administração e Pós-graduado em MBA em
        Investimentos e Private Banking no Ibmec. Atuo como Analista Financeiro
        em uma empresa varejista e atacadista no setor de Auto Peças. Realizo
        negociações com stakeholders, utilizo Power Bi e Excel para apresentar e
        guardar dados, e o sistema empresarial SAP para preparação e liberação
        de remessas diárias de pagamentos. Trabalho em uma equipe onde, as
        principais skills são a comunicação e colaboração, usadas para melhorar
        a eficiência e a eficácia, entregando qualidade e atingindo objetivos.
      </p>
      <p className={styles.paragrafo}>
        Atualmente, tenho como prioridade realizar uma transição de carreira
        para área de Desenvolvimento de Software Back End, Full Stack ou
        Analista de Testes de Software e para isso estou adquirindo novas skills
        em Desenvolvimento Back End na Cubos Academy, com as stacks de Node.js,
        Express, Jest, SQL, Typescript e skills de desenvolvimento pessoal.
      </p>
      <p className={styles.paragrafo}>
        Paralelamente estou cursando Analista de Testes de Software na Ultima
        School com as stacks de teste manual com Jira, teste unitário com Jest,
        teste de integração com Postman, teste automatizado com Selenium.
        Afinal, um bom programador precisa saber testar scripts e aplicativos, e
        documentá-lo de forma adequada.
      </p>
      <p className={styles.paragrafo}>
        Nas horas vagas adoro jogar vídeo game, assistir NBA, séries e filmes,
        principalmente Star Wars e Marvel. Também amo brincar com meu Pug
        Frederico.
      </p>
    </PostModelo>
  );
}
