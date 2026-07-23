export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalDoc {
  title: string;
  updated: string;
  sections: LegalSection[];
  buttons?: string[];
}

export type LegalKey = 'privacy' | 'terms' | 'cookie';

export const legal: Record<string, Record<LegalKey, LegalDoc>> = {
  zh: {
    privacy: {
      title: '隐私政策',
      updated: '最后更新时间：2026年7月',
      sections: [
        {
          heading: '我们收集的信息',
          paragraphs: ['我们仅收集提供服务所必需的最低限度数据。这些数据可能包括：'],
          list: [
            '浏览数据（IP 地址、浏览器类型、访问页面）',
            'Cookie 和类似技术',
            '您通过联系表格或电子邮件自愿提供的任何信息',
          ],
        },
        {
          heading: '我们如何使用您的信息',
          paragraphs: ['我们使用收集到的信息用于：'],
          list: ['改善网站内容和用户体验', '分析流量和使用模式', '回应请求', '遵守我们的法律义务'],
        },
        {
          heading: '第三方服务',
          paragraphs: [
            '我们的网站可能会使用第三方服务，例如谷歌地图（用于嵌入式地图和位置数据）、谷歌分析（用于流量分析）和 Unsplash（用于图片）。这些服务均有各自的隐私政策。',
          ],
        },
        {
          heading: '您的权利',
          paragraphs: ['根据《通用数据保护条例》(GDPR) 及相关法规，您享有以下权利：'],
          list: ['访问您的个人数据', '要求更正或删除', '反对数据处理 / 限制处理', '向监管机构提出申诉'],
        },
      ],
    },
    terms: {
      title: '服务条款',
      updated: '最后更新时间：2026年7月',
      sections: [
        {
          heading: '内容使用',
          paragraphs: [
            '本网站所有内容仅供参考。我们是一家独立的第三方旅游信息网站，与任何旅游景点、政府机构或商业运营商均无关联。',
          ],
        },
        {
          heading: '信息的准确性',
          paragraphs: [
            '我们力求提供准确及时的信息，但无法保证信息的完整性或准确性。行程安排、条件和服务如有变更，恕不另行通知。请务必在出行前通过官方渠道核实重要信息。',
          ],
        },
        {
          heading: '知识产权',
          paragraphs: [
            '本网站设计和原创内容受版权保护。图片来自 Unsplash 并已获得授权许可。Google 地图数据的使用符合 Google 的服务条款。',
          ],
        },
        {
          heading: '责任限制',
          paragraphs: [
            '本网站按“现状”提供，不作任何形式的担保。对于因使用本网站信息而造成的任何损失（包括但不限于基于本网站内容做出的旅行决定），我们概不负责。',
          ],
        },
      ],
    },
    cookie: {
      title: 'Cookie 设置',
      updated: '最后更新时间：2026年7月',
      sections: [
        {
          heading: '必要 Cookie',
          paragraphs: ['这些 Cookie 对于网站正常运行至关重要，无法禁用。'],
        },
        {
          heading: '分析型 Cookie',
          paragraphs: ['Google Analytics（可手动激活/停用）', '通过收集匿名使用数据，帮助我们了解访客如何与我们的网站互动。'],
        },
        {
          heading: '偏好 Cookie',
          paragraphs: ['用户偏好（可手动激活/停用）', '记住您的自定义设置（例如语言和主题偏好）。'],
        },
        {
          heading: '营销 Cookie',
          paragraphs: ['个性化广告（已默认停用）', '用于展示相关内容并衡量广告活动的有效性。'],
        },
        {
          heading: '同意管理',
          paragraphs: ['您可以随时更改您的 Cookie 设置。请注意，禁用某些 Cookie 可能会影响网站的部分功能。'],
        },
      ],
      buttons: ['保存偏好设置', '拒绝一切'],
    },
  },
  en: {
    privacy: {
      title: 'Privacy Policy',
      updated: 'Last updated: July 2026',
      sections: [
        {
          heading: 'Information We Collect',
          paragraphs: ['We collect only the minimum data necessary to provide our service. This may include:'],
          list: [
            'Browsing data (IP address, browser type, pages visited)',
            'Cookies and similar technologies',
            'Any information you voluntarily provide via our contact form or email',
          ],
        },
        {
          heading: 'How We Use Your Information',
          paragraphs: ['We use the information collected to:'],
          list: ['Improve website content and user experience', 'Analyse traffic and usage patterns', 'Respond to requests', 'Comply with our legal obligations'],
        },
        {
          heading: 'Third-Party Services',
          paragraphs: [
            'Our website may use third-party services such as Google Maps (for embedded maps and location data), Google Analytics (for traffic analysis) and Unsplash (for images). These services have their own privacy policies.',
          ],
        },
        {
          heading: 'Your Rights',
          paragraphs: ['Under the General Data Protection Regulation (GDPR) and related laws, you have the right to:'],
          list: ['Access your personal data', 'Request correction or deletion', 'Object to or restrict processing', 'Lodge a complaint with a supervisory authority'],
        },
      ],
    },
    terms: {
      title: 'Terms of Service',
      updated: 'Last updated: July 2026',
      sections: [
        {
          heading: 'Use of Content',
          paragraphs: [
            'All content on this website is provided for informational purposes only. We are an independent third-party travel information website, not affiliated with any tourist attraction, government agency or commercial operator.',
          ],
        },
        {
          heading: 'Accuracy of Information',
          paragraphs: [
            'We strive to provide accurate and up-to-date information but cannot guarantee its completeness or accuracy. Itineraries, conditions and services are subject to change without notice. Always verify important information through official channels before travelling.',
          ],
        },
        {
          heading: 'Intellectual Property',
          paragraphs: [
            'The design and original content of this website are protected by copyright. Images are from Unsplash and used under licence. Use of Google Maps data complies with Google’s Terms of Service.',
          ],
        },
        {
          heading: 'Limitation of Liability',
          paragraphs: [
            'This website is provided "as is" without any warranties of any kind. We are not responsible for any loss arising from the use of information on this website, including but not limited to travel decisions based on its content.',
          ],
        },
      ],
    },
    cookie: {
      title: 'Cookie Settings',
      updated: 'Last updated: July 2026',
      sections: [
        {
          heading: 'Necessary Cookies',
          paragraphs: ['These cookies are essential for the website to function and cannot be disabled.'],
        },
        {
          heading: 'Analytics Cookies',
          paragraphs: ['Google Analytics (can be activated/deactivated manually)', 'By collecting anonymous usage data, they help us understand how visitors interact with our website.'],
        },
        {
          heading: 'Preference Cookies',
          paragraphs: ['User preferences (can be activated/deactivated manually)', 'Remember your custom settings (such as language and theme preferences).'],
        },
        {
          heading: 'Marketing Cookies',
          paragraphs: ['Personalised advertising (disabled by default)', 'Used to display relevant content and measure the effectiveness of advertising campaigns.'],
        },
        {
          heading: 'Consent Management',
          paragraphs: ['You can change your cookie settings at any time. Please note that disabling certain cookies may affect some functions of the website.'],
        },
      ],
      buttons: ['Save Preferences', 'Reject All'],
    },
  },
  pt: {
    privacy: {
      title: 'Política de Privacidade',
      updated: 'Última atualização: julho de 2026',
      sections: [
        {
          heading: 'Informação que Recolhemos',
          paragraphs: ['Recolhemos apenas os dados mínimos necessários para prestar o nosso serviço. Estes podem incluir:'],
          list: [
            'Dados de navegação (endereço IP, tipo de navegador, páginas visitadas)',
            'Cookies e tecnologias semelhantes',
            'Qualquer informação que forneça voluntariamente através do nosso formulário de contacto ou e-mail',
          ],
        },
        {
          heading: 'Como Utilizamos as Suas Informações',
          paragraphs: ['Utilizamos as informações recolhidas para:'],
          list: ['Melhorar o conteúdo do site e a experiência do utilizador', 'Analisar o tráfego e os padrões de utilização', 'Responder a pedidos', 'Cumprir as nossas obrigações legais'],
        },
        {
          heading: 'Serviços de Terceiros',
          paragraphs: [
            'O nosso site pode utilizar serviços de terceiros, como o Google Maps (para mapas incorporados e dados de localização), o Google Analytics (para análise de tráfego) e o Unsplash (para imagens). Estes serviços têm as suas próprias políticas de privacidade.',
          ],
        },
        {
          heading: 'Os Seus Direitos',
          paragraphs: ['Ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD) e legislação relacionada, tem o direito de:'],
          list: ['Aceder aos seus dados pessoais', 'Solicitar correção ou eliminação', 'Opor-se ao tratamento ou limitá-lo', 'Apresentar uma queixa a uma autoridade de controlo'],
        },
      ],
    },
    terms: {
      title: 'Termos de Serviço',
      updated: 'Última atualização: julho de 2026',
      sections: [
        {
          heading: 'Utilização do Conteúdo',
          paragraphs: [
            'Todo o conteúdo deste site é fornecido apenas para fins informativos. Somos um site independente de informação de viagens, não afiliado a qualquer atração turística, órgão governamental ou operador comercial.',
          ],
        },
        {
          heading: 'Exatidão das Informações',
          paragraphs: [
            'Esforçamo-nos por fornecer informações precisas e atualizadas, mas não podemos garantir a sua exatidão ou integridade. Itinerários, condições e serviços podem mudar sem aviso prévio. Verifique sempre as informações importantes através de canais oficiais antes de viajar.',
          ],
        },
        {
          heading: 'Propriedade Intelectual',
          paragraphs: [
            'O design e o conteúdo original deste site estão protegidos por direitos de autor. As imagens provêm do Unsplash e são utilizadas sob licença. A utilização de dados do Google Maps cumpre os Termos de Serviço do Google.',
          ],
        },
        {
          heading: 'Limitação de Responsabilidade',
          paragraphs: [
            'Este site é fornecido "como está", sem quaisquer garantias. Não nos responsabilizamos por qualquer perda decorrente da utilização das informações deste site, incluindo, nomeadamente, decisões de viagem baseadas no seu conteúdo.',
          ],
        },
      ],
    },
    cookie: {
      title: 'Definições de Cookies',
      updated: 'Última atualização: julho de 2026',
      sections: [
        {
          heading: 'Cookies Necessários',
          paragraphs: ['Estes cookies são essenciais para o funcionamento do site e não podem ser desativados.'],
        },
        {
          heading: 'Cookies de Análise',
          paragraphs: ['Google Analytics (pode ser ativado/desativado manualmente)', 'Ao recolher dados de utilização anónimos, ajudam-nos a compreender como os visitantes interagem com o nosso site.'],
        },
        {
          heading: 'Cookies de Preferências',
          paragraphs: ['Preferências do utilizador (podem ser ativadas/desativadas manualmente)', 'Lembrar as suas definições personalizadas (como idioma e tema).'],
        },
        {
          heading: 'Cookies de Marketing',
          paragraphs: ['Publicidade personalizada (desativada por defeito)', 'Utilizados para apresentar conteúdo relevante e medir a eficácia das campanhas publicitárias.'],
        },
        {
          heading: 'Gestão do Consentimento',
          paragraphs: ['Pode alterar as suas definições de cookies a qualquer momento. Note que desativar certos cookies pode afetar algumas funcionalidades do site.'],
        },
      ],
      buttons: ['Guardar Preferências', 'Rejeitar Tudo'],
    },
  },
};
