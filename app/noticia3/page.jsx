import styles from "./page.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
const Pessoa = () => {
    return (

        <div className={styles.principal}>
            <Header />
            <img className={styles.img} src="https://cdn2.unrealengine.com/fortnite-island-creator-rules-1900x600-a829c3da1d8f.jpg" alt="" />

            <div className={styles.tudo} >

                <div className={styles.div1}>
                    <h1 className={styles.h1}>REGRAS PARA CRIADORES DE ILHAS DO FORTNITE</h1>
                    <p className={styles.p1}>16.10.2023</p>
                    <p className={styles.p2}>Equipe Fortnite</p>
                    <p className={styles.p2}>Última Atualização: 16 de outubro de 2023</p>
                </div>

                <div className={styles.div1}>
                    <h3 className={styles.p3}>ATUALIZAÇÃO (16 de outubro de 2023)</h3>
                    <p className={styles.p3}>Fizemos diversas atualizações de políticas. As principais mudanças foram:</p>
                    <p className={styles.p3}>
                        Atualizamos a regra 1.15 (de acordo com a classificação etária de Fortnite): as imagens e textos usados para divulgar a sua experiência devem ser apropriados para o público geral (p. ex.: conteúdo que entraria na classificação ESRB 10+ ou menos). As imagens aprovadas anteriormente precisam seguir esta atualização.
                        Adicionamos a regra 1.18 (Apresentação do Conteúdo da Ilha)
                    </p>
                    <p className={styles.p3}>Tire um tempo para ler as regras atualizadas e se familiarizar com elas.</p>
                </div>

                <div className={styles.div1}>
                    <h3 className={styles.p3}>ATUALIZAÇÃO (2 de outubro de 2023)</h3>
                    <p className={styles.p3}>Publicamos diversos esclarecimentos de políticas. As principais mudanças foram:</p>
                    <p className={styles.p4}>Esclarecemos as regras 1.2 </p>
                    <p className={styles.p4}>Adicionamos as regras 1.6 e 1.17</p>
                    <p className={styles.p4}>Atualizamos as regras 1.8, 1.9, 1.11, 1.12, 1.14 e 4.2.3</p>
                    <p className={styles.p4}>Adicionamos as seções 1.15 (de acordo com a Classificação Indicativa do Fortnite) e 3.4 (Concursos e Sorteios)</p>
                    <p className={styles.p3}>Tire um tempo para ler as regras atualizadas e se familiarizar com elas.</p>
                </div>

                <div>
                    <h1 className={styles.h2}>BOAS-VINDAS, CRIADOR(A) DO FORTNITE!</h1>
                    <p className={styles.p4}>
                        As ferramentas Modo Criativo do Fortnite e Unreal Editor para Fortnite permitem que você crie Ilhas que podem ser publicadas no Fortnite.</p>

                    <p className={styles.p3}>Nosso intuito é que o Fortnite seja um lugar seguro e divertido para todos jogarem e se distraírem com os amigos, exatamente como dizemos nas Regras da Comunidade. </p>

                    <p className={styles.p3}>Ao criar novas Ilhas, jogos e experiências dentro do Fortnite, precisamos da sua ajuda para manter o jogo seguro, divertido e acolhedor para todos. Também queremos facilitar a criação e o sucesso da sua Ilha no Modo Criativo do Fortnite. </p>

                    <p className={styles.p3}>Essas regras descrevem as maneiras apropriadas para criar, promover e monetizar as suas Ilhas no Modo Criativo do Fortnite, incluindo algumas recomendações e restrições. Pedimos que você leia com atenção antes de publicar sua primeira Ilha do Fortnite. Boa sorte! </p>
                </div>

                <div>
                    <h1 className={styles.h2}>RESUMINDO:</h1>
                    <p className={styles.p3}>Seja pelo Fortnite ou pelo Unreal Editor para Fortnite, toda Ilha que você cria é sua responsabilidade, e você deve obedecer as seguintes regras:</p>

                    <p className={styles.p3}>1. Suas Ilhas devem estar de acordo tanto com as regras abaixo quanto com as Regras de Conteúdo da Epic Games.</p>

                    <p className={styles.p3}>2. Seu comportamento deve estar de acordo tanto com as regras abaixo quanto com as Regras da Comunidade da Epic Games.</p>

                    <p className={styles.p3}>3. Qualquer divulgação da sua Ilha, seja dentro ou fora do Fortnite, deve estar de acordo tanto com as regras abaixo quanto com as Diretrizes Sobre Gestão de Marca do Modo Criativo do Fortnite. </p>
                </div>

                <div>
                    <h1 className={styles.h2}>REGRAS</h1>
                    <h4 className={styles.p3}>1. REGRAS E DIRETRIZES DE CONTEÚDO</h4>
                    <p className={styles.p3}>À medida que trabalharmos juntos para garantir que o Fortnite continue sendo um ambiente seguro e acolhedor para todos, seu conteúdo do Fortnite precisa seguir as seguintes regras:</p>
                    <p className={styles.p3}>1.1 Um Ambiente Seguro — Não é permitido criar conteúdo que envolva ou promova atividades ilegais, incluindo assédio, bullying, ataques, doxing (tornar público dados privados de uma pessoa), golpes, apostas e jogos de azar, drogas ilegais, crueldade com animais, fraude, hacking e pirataria. O Fortnite não é o lugar para conteúdo que incite ou faça apologia à violência contra outras pessoas.</p>
                    <p className={styles.p3}>1.2. Não Compartilhe Informações Pessoais — Para respeitar a privacidade e ajudar a combater práticas enganosas (phishing, compra e venda de informações da conta), não compartilhe ou solicite informações pessoais na sua Ilha. Há uma exceção a esta regra: você pode incluir seus nomes/canais de redes sociais se eles não incluírem uma URL, código QR ou solicitação para mensagens privadas ou diretas. Para preservar a privacidade dos outros, você não pode juntar, compartilhar ou explorar informações pessoais de indivíduos nem organizações através da sua Ilha. Não inclua vídeos nem fotos de pessoas (nem você nem terceiros) na sua Ilha ou nos metadados dela. Os bate-papos de voz e texto da Epic no Fortnite contam com proteções como configurações de privacidade, controle dos pais e denúncias de jogadores. Por isso, não ofereça outras formas de comunicação na sua Ilha, como caixas de bate-papo ou teclados personalizados. </p>
                    <p className={styles.p3}>1.3. Intolerância e Discriminação — O Fortnite saúda a diversidade de raça, etnia, cor, religião, identidade de gênero, orientação sexual, capacidade, origem de nacionalidade e outros grupos. O conteúdo produzido não deve depreciar, marginalizar, usar linguagem de ódio contra, ou menosprezar outros usuários ou grupos.</p>
                    <p className={styles.p3}>1.4. Só Amor, Nada de Ódio — Não produza conteúdo que inclua símbolos ou representações de ódio ou que glorifique ou incite a violência.</p>
                    <p className={styles.p3}>1.5. Bullying e Assédio — Respeite as pessoas jogadoras que participam da sua criação. É proibido interagir com outras pessoas de maneira predatória, ameaçadora, intimidadora, vulgar, degradante, depreciativa, invasiva da privacidade ou abusiva.</p>
                    <p className={styles.p3}>1.6 Seja Original — Faça criações originais. Não replique, copie ou reproduza recursos promocionais de outros criadores, como miniaturas, títulos e/ou descrições. Não finja que sua criação pertence a outro criador ou criadora, incluindo o uso de nomes de jogo parecidos, imagens, etc. Não se passe por outros jogadores, criadores, streamers, celebridades, empresas, marcas, oficiais do governo, funcionários da Epic ou qualquer outra pessoa. Fingir ser outra pessoa para enganar ou defraudar os outros não é permitido. </p>
                    <p className={styles.p3}>1.7. Respeite a Propriedade Intelectual — O conteúdo criado, publicado e/ou usado por você não pode infringir nem violar os direitos de terceiros, incluindo os direitos de propriedade intelectual, como direitos autorais e marcas registradas. Você precisa obter permissão para publicar e compartilhar conteúdos que não sejam seus, e a licença deve ser abrangente o bastante para conceder à Epic licença de uso consistente com a EULA do Fortnite e os Termos Suplementares do UEFN. Mais informações sobre direitos autorais podem ser encontradas aqui.</p>
                    <p className={styles.p3}>1.8 Dê os Créditos Necessários — Se você usar conteúdo com uma licença que exige atribuição, como Creative Commons 4.0 International, você deve fornecer os créditos necessários, como usando a seção "Atribuições" no Portal de Criadores. Lembre-se de que algumas licenças podem não ser compatíveis com esta ferramenta ou o UEFN. Se não tiver certeza de que atende os requisitos de atribuição da licença, não use conteúdo licenciado.
                    </p>
                    <p className={styles.p3}>1.9. Jogue de Acordo com as Regras — Não crie Ilhas que promovam o uso de trapaças, falhas, itens bugados, travamentos do servidor e erros. Não use sua Ilha para enganar outras pessoas.
                    </p>
                    <p className={styles.p3}>1.10. Apenas Linguajar Apropriado — No nome da Ilha ou na Ilha, não inclua textos ou símbolos obscenos nem variações ortográficas ou representações visuais de texto com o objetivo de burlar essas regras.</p>
                    <p className={styles.p3}>1.11. Nada de Apostas — Não implemente conteúdos com temática de sorteio jogáveis, cassino ou apostas e jogos de azar. Todos esses são proibidos, mesmo que não envolvam dinheiro real ou moedas virtuais.</p>
                    <p className={styles.p3}>1.12 O Que Acontece na Ilha, Fica na Ilha — Com exceção de nomes de usuário/canais de redes sociais que seguem as regras 1.2, não inclua links externos ou códigos QR na sua Ilha.</p>
                    <p className={styles.p3}>1.13. Autenticidade — Ao divulgar sua Ilha no Fortnite, todos os recursos usados (como miniaturas de imagens, planos de fundo do Lobby e vídeos) devem representar com precisão a experiência que as pessoas jogadoras terão na Ilha. Não crie propaganda enganosa da sua experiência para as pessoas jogadoras. Não são permitidas fotografias. Você não pode mencionar V-Bucks, moedas ou recompensas. Não incorpore elementos que confundam quem está jogando em relação a ganhos de EXP, itens no jogo e Tarefas. Caso o Fortnite já forneça um elemento visual para representar um recurso para quem está jogando (p. ex.: a possibilidade de ganhar EXP na sua Ilha ou a seleção da borda do título de jogo), não o imite nem o complemente.</p>
                    <p className={styles.p3}>As miniaturas devem seguir as Diretrizes para Miniaturas do Descobrir disponíveis na Documentação do Modo Criativo do Fortnite.</p>
                    <p className={styles.p3}>1.14. Siga os Requisitos — Certifique-se de que suas Ilhas não causam problemas no servidor (intencionalmente ou não). As taxas de quadros devem ficar acima de 30 FPS.</p>
                    <p className={styles.p3}>1.15 Respeite a Classificação Indicativa do Jogo — Fortnite é um jogo classificado como apropriado para adolescentes, e qualquer conteúdo que não esteja dentro dessa classificação é proibido. Por exemplo, não crie conteúdo para adultos (nada de pole dance). Consulte a "Classificação Indicativa Máxima no Fortnite" em IARC: Visão Geral. Também não aceitamos conteúdos direcionados especificamente a crianças com menos de 13 anos (como canções de ninar). As imagens e textos usados para divulgar a sua experiência devem ser apropriados para o público geral (p. ex.: conteúdo que entraria na classificação ESRB 10+ ou menos). Todos os criadores devem obter classificações indicativas para o seu conteúdo via IARC (Coalizão Internacional de Classificação Etária) ao publicá-lo. Ao criar ou publicar conteúdo para o Fortnite, você também deve seguir as regras abaixo:</p>
                    <p className={styles.p5}>1.15.1. Violência e Carnificina: a violência nunca pode ser realista. Animações de morte e replays de eliminações não são permitidos. Nenhum tipo de carnificina realista é permitido, incluindo referências a sangue de verdade ou falso. Seu conteúdo pode conter o tema de terror e/ou "sustos", mas nenhum dos dois podem ser intensos nem prolongados. Evite usar imagens perturbadoras.</p>
                    <p className={styles.p5}>1.15.2. Linguajar: xingamentos e conotações sexuais, ambos leves e não explícitos, são permitidos, porém não devem ser frequentes. Nenhum tipo de discurso de ódio ou discriminação é permitido. Nenhum palavrão de cunho sexual é permitido.</p>
                    <p className={styles.p5}>1.15.3. Nudez e Temas Sexualmente Sugestivos: temas românticos são permitidos, mas não devem conter temáticas ou referências sexuais explícitas ou frequentes. Nenhuma forma de representação de nudez completa ou atividade sexual é permitida.</p>
                    <p className={styles.p5}>1.15.4. Álcool e Drogas: referências a álcool, tabaco, drogas ilegais e/ou uso de drogas não são permitidas em nenhuma forma.</p>
                    <p className={styles.p5}>1.15.5. Apostas: ilhas que ensinam ou contam com imagens ou atividades que são tipicamente associadas a apostas no mundo real, jogos de azar ou jogos que oferecem prêmios, mesmo que não simulem uma experiência de aposta direta, não são permitidas.</p>
                    <p className={styles.p5}>1.15.6. Obscenidade: representações realistas de funções orgânicas, incluindo excrementos, defecação, urinação ou vômito não são permitidas em nenhuma forma.</p>
                    <p className={styles.p3}>1.16. Uso Indevido dos Sistemas da Epic — A Epic mantém muitos sistemas para proteger os usuários e os dados deles. Não tente burlar essas proteções para ganhar acesso não autorizado a nenhum sistema ou dado da Epic. Não tente obter informações delicadas de pessoas jogadoras. Não tente criar ou distribuir softwares maliciosos através dos sistemas da Epic.</p>
                    <p className={styles.p3}>1.17 Exceções Educativas — Reservamo-nos o direito de permitir exceções às nossas Regras para Criadores de Ilhas se o propósito principal da sua Ilha for educativo, científico, artístico ou histórico.
                    </p>
                    <p className={styles.p3}>1.18 Apresentação do Conteúdo da Ilha — Ao enviar seu questionário para Classificação Etária para a IARC, você deve revelar com precisão o conteúdo relevante presente na sua Ilha para receber classificações etárias apropriadas. Respostas imprecisas podem resultar na rejeição do seu conteúdo, enquanto violações contínuas podem incorrer em outras ações, entre as quais a suspensão ou revogação permanente em potencial dos seus privilégios de monetização e publicação.</p>
                </div>

                <div>
                    <h2 className={styles.p3}>2. TRABALHANDO EM EQUIPE</h2>
                    <p className={styles.p3}>2.1. Caso você recrute outro(a) criador(a) de Ilhas para ajudar a construir a sua experiência ou aceite ajudar na experiência de outro(a) criador(a) de Ilhas, o acordo será válido somente entre vocês. A Epic Games não tem participação no acordo nem responsabilidade por nenhum aspecto dele.</p>
                    <p className={styles.p3}>2.2. Caso você tenha interesse em usar um vídeo personalizado na sua Ilha, e queira saber como fazer isso, entre em contato conosco usando o Formulário de Suporte aos Criadores para descobrir como ter acesso antecipado a essa funcionalidade.
                    </p>
                    <p className={styles.p3}>2.3 O Unreal Editor para Fortnite permite que criadores adultos trabalhem juntos em equipes, que são gerenciadas pelo Portal de Criadores do Fortnite. Você é responsável por garantir que o conteúdo criado e publicado por equipes que sejam suas siga as regras aqui expressas. Todo conteúdo da sua equipe é de sua responsabilidade, ainda que o conteúdo irregular tenha sido feito ou importado por outro membro da equipe.</p>
                </div>

                <div>
                    <h2 className={styles.p3}>3. DIVULGANDO SUA ILHA</h2>
                    <p className={styles.p3}>Queremos facilitar a divulgação da sua Ilha no Fortnite e ajudar no sucesso dela. A divulgação da Ilha, seja dentro ou fora do Fortnite, deve seguir as regras:</p>
                    <h3 className={styles.h3}>3.1. Uso da Propriedade Intelectual da Epic Games e do Fortnite em Divulgações</h3>
                    <p className={styles.p3}>3.1.1. Ao divulgar a sua Ilha, ela não deve ser representada como um trabalho desenvolvido em parceria com a Epic Games nem como uma Ilha oficial do Fortnite da Epic Games, seja do presente ou do passado.
                    </p>
                    <p className={styles.p3}>3.1.2. Ao divulgar sua Ilha, você pode usar o logotipo "Criado no Fortnite", com a condição de que ele siga as nossas Diretrizes Sobre Gestão de Marca do Modo Criativo do Fortnite.</p>
                    <p className={styles.p3}>3.1.3. Não use os logotipos do Fortnite nem da Epic Games em nenhum lugar da sua Ilha nem nos materiais promocionais dela.</p>
                    <p className={styles.p3}>3.1.4. Ao divulgar sua Ilha, todos os recursos usados devem ter a cara da sua Ilha e seguir as Diretrizes Sobre Gestão de Marca do Modo Criativo do Fortnite. Não crie propaganda enganosa da sua experiência para os jogadores. Não são permitidas fotografias.
                    </p>
                    <p className={styles.p3}>3.1.5. Você deve incluir em destaque a seguinte frase em todo material promocional: "Isto não é patrocinado, apoiado ou administrado pela Epic Games, Inc.".</p>
                    <p className={styles.p3}>3.1.6. Ao criar materiais promocionais para a sua Ilha, você só pode exibir Trajes ou outros itens que sejam de propriedade da Epic Games (ou que você tenha permissão explícita para usar ou do qual possua os direitos). Por exemplo, não use os Trajes da Marvel nem da DC.</p>
                </div>

                <div>
                    <h3 className={styles.h3}>3.2 Atividades de Marketing</h3>
                    <p className={styles.p3}>3.2.1. Todo o conteúdo de marketing que você usar para promover a sua Ilha, independentemente do canal ou do formato, deve estar de acordo com estas regras. A Epic se reserva o direito de proibir qualquer atividade de marketing que julgue violar estas regras.
                    </p>
                    <p className={styles.p3}>3.2.2. Não promova a sua Ilha por meio de anúncios comerciais na televisão nem em redes de anúncios digitais sem prévio e expresso consentimento da Epic Games. Para solicitar o consentimento, entre em contato conosco usando o Formulário de Suporte aos Criadores.</p>
                    <p className={styles.p3}>3.2.3. Você pode promover sua Ilha digitalmente por meio de anúncios e recursos dos seus próprios sites, canais ou plataformas sociais, bem como em anúncios de mecanismos de busca baseados em texto, tais quais os do Google Busca.
                    </p >
                    <p className={styles.p3}>3.2.4. Caso recorra a influenciadores para promover a sua Ilha, compensando-os monetariamente, siga todas as leis aplicáveis, como as Diretrizes de Apoio da FTC, de modo que a conexão do influenciador com a sua Ilha seja completamente transparente.</p>
                    <p className={styles.p3}>3.2.5. Não crie nem distribua nenhum item promocional físico de nenhum tipo para promover sua Ilha, a exemplo de roupas, adesivos, folhetos, canecas, etc., sem prévio e expresso consentimento da Epic Games.
                    </p>
                    <p className={styles.p3}>3.2.6. Ao promover sua Ilha através de anúncios de busca, não compre anúncios que incluam palavras-chave nem termos de busca que sejam marcas registradas da Epic Games, como "Fortnite" e "Epic Games".
                    </p>
                    <p className={styles.p3}>3.2.7. Fortnite é um jogo de classificação ESRB Teen e PEGI 12 (Classificação indicativa 12 anos no Brasil). Todo o material publicitário, de divulgação e/ou comunicação relacionado à sua Ilha deve seguir a classificação etária brasileira de 12 anos. Você não deve fazer publicidade, divulgação nem comunicação da sua Ilha tendo como alvo o público menor de 13 anos.
                    </p>
                    <h3 className={styles.h3}>3.3 Marketing de Eventos</h3>
                    <p className={styles.p3}>3.3.1. Você pode promover sua Ilha por meio de eventos físicos e online, contanto que seu evento, competição ou torneio esteja de acordo com todos os Termos de Licença de Eventos Fortnite e com as Regras de Eventos de Terceiros do Fortnite.
                    </p>
                    <h3 className={styles.h3}>3.4 Concursos e Sorteios</h3>
                    <p className={styles.p3}>3.4.1. Sua Ilha do Fortnite não pode ser usada para conduzir ou promover um concurso ou sorteio com prêmios ("Promoção"). Isso significa que todos os aspectos de uma Promoção (incluindo referências à Promoção, materiais promocionais, instruções de participação, métodos de participação, seleção de vencedores e prêmios concedidos) devem ser realizados fora da sua Ilha do Fortnite.</p>
                    <p className={styles.p3}>3.4.2. Ao conduzir ou promover uma Promoção fora do Fortnite ligada à sua Ilha, você deve seguir as regras da Seção 3 e todas as leis aplicáveis (incluindo os requisitos de registro). Você também:</p>
                    <p className={styles.p3}>3.4.2.1. Não pode encorajar ou exigir que participantes façam qualquer tipo de compra ou pagamento ligado à sua Promoção. Por exemplo: você não pode restringir a participação na Promoção por taxas, assinaturas/inscrições pagas, ou outra forma de compra, nem insinuar que uma determinada compra pode aumentar suas chances de vencer;</p>
                    <p className={styles.p3}>3.4.2.2. Publicar as regras oficiais da Promoção ("Termos da Promoção"), incluindo todos os avisos e termos exigidos por lei, e deixá-los disponíveis sempre que uma Promoção foi realizada e participações aceitas;</p>
                    <p className={styles.p3}>3.4.2.3. Nos Termos da Promoção e onde a Promoção for realizada ou entradas forem aceitas, certifique-se de que os patrocinadores da Promoção estão identificados nitidamente e informe o aviso a seguir: "Esta promoção não é patrocinada, endossada nem administrada pela Epic Games, Inc."; e</p>
                    <p className={styles.p3}>3.4.2.4. Inclua os avisos a seguir nos Termos da Promoção:</p>
                    <p className={styles.p3}>Para todas as Promoções: "AO PARTICIPAR DESTE EVENTO, NA EXTENSÃO PERMITIDA PELA LEI APLICÁVEL, OS PARTICIPANTES CONCORDAM EM LIBERAR E ISENTAR A EPIC GAMES, INC., SEUS LICENCIADORES, SEUS RESPECTIVOS AFILIADOS E FUNCIONÁRIOS, EXECUTIVOS, DIRETORES, AGENTES, CONTRATADOS E OUTROS REPRESENTANTES DE TODA E QUALQUER RECLAMAÇÃO, EXIGÊNCIA, AÇÃO, PERDA, RESPONSABILIDADE E DESPESA RELACIONADA À PROMOÇÃO."
                    </p>
                    <p className={styles.p3}>Além disso, se os participantes precisarem fornecer alguma informação pessoal ou da conta: "AS INFORMAÇÕES DOS PARTICIPANTES FORNECIDAS LIGADAS À ESTA PROMOÇÃO SÃO ENTREGUES AO PATROCINADOR, NÃO À EPIC GAMES, INC.
                    </p>

                    <h3 className={styles.h3}>3.5 Comunicação com a Imprensa</h3>
                    <p className={styles.p3}>3.5.1. Os materiais criados para comunicados à imprensa e para promover a sua experiência não devem declarar nem insinuar que sua experiência é uma experiência oficial da Epic Games nem que você tem algum tipo de parceria com a Epic Games.</p>
                    <p className={styles.p3}>3.5.1. Os materiais criados para comunicados à imprensa e para promover a sua experiência não devem declarar nem insinuar que sua experiência é uma experiência oficial da Epic Games nem que você tem algum tipo de parceria com a Epic Games.</p>
                    <p className={styles.p3}>3.5.3. Caso tenha dúvidas em relação à divulgação da sua experiência junto à imprensa ou queira que os materiais que você criar para a imprensa sejam revisados para garantir que estão de acordo com as nossas diretrizes, entre em contato com a Epic Games pelo endereço FNCreativePR@epicgames.com.</p>
                    <p className={styles.p3}>3.5.4. Use a linguagem apresentada no exemplo abaixo para descrever o Fortnite nos seus materiais para a imprensa:
                    </p>
                    <p className={styles.p3}>3.5.4.1. "O Fortnite é desenvolvido pela Epic Games e oferece uma grande variedade de ferramentas para que todos possam desenvolver jogos e experiências."</p>
                    <p className={styles.p3}>3.5.4.2. "No Fortnite, qualquer pessoa pode desenvolver sua própria experiência online e compartilhá-la gratuitamente com o público do mundo inteiro do Fortnite."</p>

                    <h2 className={styles.h3}>4. MONETIZANDO SUA EXPERIÊNCIA</h2>
                    <p className={styles.p3}>Queremos facilitar o máximo possível a monetização da sua experiência no Fortnite ao mesmo tempo em que conservamos a transparência para os jogadores. Estas regras apresentam o que você pode e não pode fazer para monetizar sua experiência no Fortnite:</p>

                    <h3 className={styles.h3}>4.1. Pagamento de Engajamento</h3>
                    <p className={styles.p3}>4.1.1. Criadores de Ilhas podem monetizar suas experiências por pagamentos por engajamento, mas precisam preencher os requisitos. Para participar do programa, acesse a a página de inscrição de Criadores de Ilhas.</p>
                    <p className={styles.p3}>4.1.2. As Ilhas que usam a Ilha Inicial "Ilha do Battle Royale" não estão disponíveis para pagamentos por engajamento.
                    </p>

                    <h3 className={styles.h3}>4.2 Programa Apoie-um-Criador</h3>
                    <p className={styles.p3}>4.2.1. Caso você crie conteúdos de mídia em outras plataformas que promovam seu conteúdo do Fortnite ou conteúdos do Fortnite criado por outros, você poderá participar do programa Apoie-um-Criador da Epic Games. Para participar do programa, inscreva-se na página do Apoie-um-Criador.</p>
                    <p className={styles.p3}>4.2.2. O Apoie-um-Criador é um programa de marketing de afiliados voltado para criadores de mídia ativos. Para aprender mais sobre os requisitos de participação do Apoie-um-Criador, veja a seção de Perguntas Frequentes do Apoie-um-Criador.</p>
                    <p className={styles.p3}>4.2.3. Participando do programa Apoie-um-Criador, você poderá divulgar seu Código de Criador em qualquer lugar fora do Fortnite. Caso você também seja um criador de Ilhas, não poderá pedir apoio com seu Código de Criador dentro da sua própria Ilha, incluindo o lobby pré-jogo e os metadados (nome, descrição, miniatura, texto da tela de carregamento nem vídeo do Descobrir). Entendemos que esse era um dos principais métodos de monetização para criadores de Ilhas, mas ele se tornou obsoleto e esses elementos devem ser removidos.</p>

                    <h3 className={styles.h3}>4.3 Conteúdo Comercial e Patrocínios</h3>
                    <p className={styles.p3}>Marcas e criadores são bem-vindos a colaborar no Fortnite, contanto que sigam estas regras e leis aplicáveis. Você não pode pagar à Epic Games para a promoção do seu conteúdo dentro do Fortnite.</p>
                    <p className={styles.p3}>4.3.1. Permitimos conteúdo comercial em sua experiência do Fortnite. Conteúdo comercial é definido como qualquer Ilha que contenha conteúdo promovendo ou apoiando uma marca, produto, serviço ou organização.
                    </p>
                    <p className={styles.p3}>4.3.2. Há duas formas de conteúdo comercial: "Pago", que o criador ou a criadora deve revelar, ou "De posse própria", que não há necessidade de revelação.</p>
                    <p className={styles.p5}>Um conteúdo comercial Pago é uma Ilha que contenha, seja na Ilha propriamente dita ou em seus metadados, conteúdo que gere compensação para o criador (p. ex.: algum valor recebido, incluindo dinheiro, bens e/ou serviços) advinda de terceiros. Esse conteúdo pode ter a forma de patrocínio, apoio, aquisição, colocação ou outras ações.</p>
                    <p className={styles.p5}>Um conteúdo comercial De Posse Própria é uma Ilha construída ou controlada por uma marca ou outra entidade comercial.</p>
                    <p className={styles.p3}>4.3.3. Caso você crie conteúdo Pago, será de sua responsabilidade seguir quaisquer leis aplicáveis que digam respeito à revelação da sua relação com o patrocinador/marca.</p>
                    <p className={styles.p3}>4.3.4. Todo criador precisa ter pelo menos 18 anos para criar ou publicar conteúdo comercial Pago.</p>
                    <p className={styles.p3}>4.3.5. Seja de conteúdo comercial ou não, os metadados da sua Ilha (nome, descrição, miniatura, texto da tela de carregamento ou vídeo no Descobrir) não podem incluir chamadas para ação, declarações sobre produtos, datas nem preços. Exemplos de coisas proibidas nos metadados da sua Ilha:</p>
                    <p className={styles.p5}>1. "Acesse lojaonline.com para saber mais!"</p>
                    <p className={styles.p5}>2. "Disponível agora por apenas R$ 9,99!"</p>
                    <p className={styles.p5}>3. "Este produto funciona melhor do que nunca!"</p>
                    <p className={styles.p5}>4. "Assista ao evento às 21h nesta data neste canal de TV!"</p>

                    <p className={styles.h3}>4.3.6. O conteúdo comercial e os patrocinadores precisam seguir as regras de conteúdo acima citadas, bem como as Diretrizes de Conteúdo da Epic Games, não podendo:</p>
                    <p className={styles.p5}>Promover a compra, venda ou troca de qualquer produto ou serviço médico, farmacêutico ou complementar;</p>
                    <p className={styles.p5}>Solicitar doações a organizações políticas nem promover filiação a elas;</p>
                    <p className={styles.p5}>Promover o serviço militar;</p>
                    <p className={styles.p5}>Promover apostas com dinheiro real;</p>
                    <p className={styles.p5}>Promover a compra, venda ou troca de explosivos, armas de fogo ou munição da vida real;</p>
                    <p className={styles.p5}>Promover a compra, venda ou troca de tabaco, álcool, maconha (legalizada ou não), drogas ilegais e outros produtos ilegais, contrabandeados ou controlados;</p>
                    <p className={styles.p5}>Promover produtos e/ou serviços financeiros enganosos ou danosos;</p>
                    <p className={styles.p5}>Promover o namoro, apresentações de ordem romântica ou encontros na vida real.</p>

                    <p className={styles.p3}>4.3.7. Você pode vender o patrocínio para eventos, torneios e competições presenciais relacionados à sua experiência, contanto que o seu evento esteja de acordo com os Termos de Licença de Eventos Fortnite e com as Regras de Eventos de Terceiros do Fortnite.
                    </p>

                    <p className={styles.h3}>4.4 Práticas de Monetização a Serem Evitadas</p>
                    <p className={styles.p5}>4.4.1. Não restrinja o acesso a conteúdo ou itens específicos dentro de uma experiência por meio de sites externos. Todo o conteúdo deve poder ser acessado dentro do jogo.</p>
                    <p className={styles.p5}>4.4.2. Não cobre pelo acesso à sua experiência. O acesso deve ser gratuito para todos os jogadores do Fortnite.
                    </p>
                    <p className={styles.p5}>4.4.2. Não cobre pelo acesso à sua experiência. O acesso deve ser gratuito para todos os jogadores do Fortnite.
                    </p>

                    <h2 className={styles.h2}>OUTROS TERMOS E CONDIÇÕES</h2>
                    <p className={styles.p3}>Todo jogador do Fortnite deve obedecer ao EULA do Fortnite. Caso você use o Unreal Editor para Fortnite, também deverá obedecer aos Termos Suplementares do UEFN; Criadores de Ilha que receberam permissão para publicar conteúdo no Fortnite também devem obedecer aos Termos do Programa de Pagamento por Engajamento. Criadores de conteúdo de mídia que promovem o Fortnite devem obedecer aos Termos e Condições do Apoie-um-Criador.</p>


                    <h2 className={styles.h2}>CONSEQUÊNCIAS</h2>
                    <p className={styles.p3}>Ao ficar ciente de uma violação das Regras para Criadores, a Epic tomará medidas com base em cada situação. Levaremos em conta diversos fatores, incluindo a gravidade do problema, infratores reincidentes, entre outros. As medidas tomadas variam: você pode levar uma advertência, perder o direito de aparecer na aba Descobrir ou ficar em destaque, ter a participação nos programas encerrada ou até mesmo ter a conta banida permanentemente por infrações mais graves.</p>
                    <p className={styles.p3}>Se a sua conta Epic for banida permanentemente, você perderá todos os direitos a jogos, itens virtuais, saldo na conta e outros itens ganhos ou comprados na Epic.</p>

                    <h2 className={styles.h2}>DENUNCIAR</h2>
                    <p className={styles.p3}>Somos todos parte desta comunidade e depende de nós mantê-la amigável, divertida e livre de negatividade. Se você se deparar com uma pessoa jogadora ou criadora que não esteja respeitando as regras acima, você pode denunciá-la ou denunciar a Ilha.</p>
                    <p className={styles.p3}>Se você encontrar alguém com quem não goste de interagir, mas a pessoa não estiver violando as Regras da Comunidade, você pode bloquear a pessoa.</p>











                </div>


            </div>
            <Footer />

        </div>
    )
};

export default Pessoa;