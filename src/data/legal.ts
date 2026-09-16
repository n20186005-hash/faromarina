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
  de: {
    privacy: {
      title: 'Datenschutzerklärung',
      updated: 'Zuletzt aktualisiert: Juli 2026',
      sections: [
        {
          heading: 'Informationen, die wir erheben',
          paragraphs: ['Wir erheben nur die für die Bereitstellung unseres Dienstes erforderlichen Mindestdaten. Dies kann Folgendes umfassen:'],
          list: [
            'Navigationsdaten (IP-Adresse, Browsertyp, besuchte Seiten)',
            'Cookies und ähnliche Technologien',
            'Alle Informationen, die Sie über unser Kontaktformular oder per E-Mail freiwillig bereitstellen',
          ],
        },
        {
          heading: 'Wie wir Ihre Informationen verwenden',
          paragraphs: ['Wir verwenden die erhobenen Informationen, um:'],
          list: ['Den Inhalt der Website und die Benutzererfahrung zu verbessern', 'Den Datenverkehr und Nutzungsmuster zu analysieren', 'Auf Anfragen zu antworten', 'Unseren gesetzlichen Verpflichtungen nachzukommen'],
        },
        {
          heading: 'Drittanbieter-Dienste',
          paragraphs: [
            'Unsere Website kann Drittanbieter-Dienste wie Google Maps (für eingebettete Karten und Standortdaten), Google Analytics (für Traffic-Analysen) und Unsplash (für Bilder) nutzen. Diese Dienste haben eigene Datenschutzerklärungen.',
          ],
        },
        {
          heading: 'Ihre Rechte',
          paragraphs: ['Gemäß der Datenschutz-Grundverordnung (DSGVO) und verwandten Gesetzen haben Sie das Recht auf:'],
          list: ['Zugriff auf Ihre personenbezogenen Daten', 'Berichtigung oder Löschung verlangen', 'Der Verarbeitung widersprechen oder sie einschränken', 'Beschwerde bei einer Aufsichtsbehörde einreichen'],
        },
      ],
    },
    terms: {
      title: 'Nutzungsbedingungen',
      updated: 'Zuletzt aktualisiert: Juli 2026',
      sections: [
        {
          heading: 'Nutzung der Inhalte',
          paragraphs: [
            'Alle Inhalte auf dieser Website dienen ausschließlich Informationszwecken. Wir sind eine unabhängige Reiseinformations-Website von Drittanbietern und nicht mit einer Touristenattraktion, Regierungsbehörde oder einem kommerziellen Betreiber verbunden.',
          ],
        },
        {
          heading: 'Richtigkeit der Informationen',
          paragraphs: [
            'Wir bemühen uns, genaue und aktuelle Informationen bereitzustellen, können jedoch Vollständigkeit oder Richtigkeit nicht garantieren. Reisepläne, Bedingungen und Dienstleistungen können sich ohne vorherige Ankündigung ändern. Bitte verifizieren Sie wichtige Informationen vor der Reise stets über offizielle Kanäle.',
          ],
        },
        {
          heading: 'Geistiges Eigentum',
          paragraphs: [
            'Das Design und die Originalinhalte dieser Website sind urheberrechtlich geschützt. Die Bilder stammen von Unsplash und werden unter Lizenz verwendet. Die Nutzung von Google Maps-Daten erfolgt gemäß den Nutzungsbedingungen von Google.',
          ],
        },
        {
          heading: 'Haftungsbeschränkung',
          paragraphs: [
            'Diese Website wird „wie besehen" ohne jegliche Gewährleistung bereitgestellt. Wir übernehmen keine Haftung für Verluste, die aus der Nutzung der Informationen auf dieser Website entstehen, einschließlich, aber nicht beschränkt auf Reiseentscheidungen, die auf deren Inhalten basieren.',
          ],
        },
      ],
    },
    cookie: {
      title: 'Cookie-Einstellungen',
      updated: 'Zuletzt aktualisiert: Juli 2026',
      sections: [
        {
          heading: 'Notwendige Cookies',
          paragraphs: ['Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert werden.'],
        },
        {
          heading: 'Analyse-Cookies',
          paragraphs: ['Google Analytics (kann manuell aktiviert/deaktiviert werden)', 'Durch die Erfassung anonymisierter Nutzungsdaten helfen sie uns zu verstehen, wie Besucher mit unserer Website interagieren.'],
        },
        {
          heading: 'Präferenz-Cookies',
          paragraphs: ['Benutzereinstellungen (können manuell aktiviert/deaktiviert werden)', 'Speichern Ihre individuellen Einstellungen (z. B. Sprach- und Designpräferenzen).'],
        },
        {
          heading: 'Marketing-Cookies',
          paragraphs: ['Personalisierte Werbung (standardmäßig deaktiviert)', 'Werden verwendet, um relevante Inhalte anzuzeigen und die Wirksamkeit von Werbekampagnen zu messen.'],
        },
        {
          heading: 'Einwilligungsverwaltung',
          paragraphs: ['Sie können Ihre Cookie-Einstellungen jederzeit ändern. Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies einige Funktionen der Website beeinträchtigen kann.'],
        },
      ],
      buttons: ['Einstellungen speichern', 'Alle ablehnen'],
    },
  },
  es: {
    privacy: {
      title: 'Política de Privacidad',
      updated: 'Última actualización: julio de 2026',
      sections: [
        {
          heading: 'Información que recopilamos',
          paragraphs: ['Recopilamos únicamente los datos mínimos necesarios para prestar nuestro servicio. Esto puede incluir:'],
          list: [
            'Datos de navegación (dirección IP, tipo de navegador, páginas visitadas)',
            'Cookies y tecnologías similares',
            'Cualquier información que proporcione voluntariamente a través de nuestro formulario de contacto o correo electrónico',
          ],
        },
        {
          heading: 'Cómo utilizamos su información',
          paragraphs: ['Utilizamos la información recopilada para:'],
          list: ['Mejorar el contenido del sitio y la experiencia del usuario', 'Analizar el tráfico y los patrones de uso', 'Responder a las solicitudes', 'Cumplir con nuestras obligaciones legales'],
        },
        {
          heading: 'Servicios de terceros',
          paragraphs: [
            'Nuestro sitio web puede utilizar servicios de terceros como Google Maps (para mapas integrados y datos de ubicación), Google Analytics (para análisis de tráfico) y Unsplash (para imágenes). Estos servicios tienen sus propias políticas de privacidad.',
          ],
        },
        {
          heading: 'Sus derechos',
          paragraphs: ['Según el Reglamento General de Protección de Datos (RGPD) y leyes relacionadas, tiene derecho a:'],
          list: ['Acceder a sus datos personales', 'Solicitar corrección o eliminación', 'Oponerse al tratamiento o limitarlo', 'Presentar una reclamación ante una autoridad de control'],
        },
      ],
    },
    terms: {
      title: 'Términos del Servicio',
      updated: 'Última actualización: julio de 2026',
      sections: [
        {
          heading: 'Uso del contenido',
          paragraphs: [
            'Todo el contenido de este sitio web se proporciona únicamente con fines informativos. Somos un sitio web independiente de información de viajes y no estamos afiliados a ninguna atracción turística, agencia gubernamental u operador comercial.',
          ],
        },
        {
          heading: 'Exactitud de la información',
          paragraphs: [
            'Nos esforzamos por proporcionar información precisa y actualizada, pero no podemos garantizar su integridad o exactitud. Los itinerarios, las condiciones y los servicios están sujetos a cambios sin previo aviso. Verifique siempre la información importante a través de canales oficiales antes de viajar.',
          ],
        },
        {
          heading: 'Propiedad intelectual',
          paragraphs: [
            'El diseño y el contenido original de este sitio web están protegidos por derechos de autor. Las imágenes provienen de Unsplash y se utilizan bajo licencia. El uso de datos de Google Maps cumple los Términos de Servicio de Google.',
          ],
        },
        {
          heading: 'Limitación de responsabilidad',
          paragraphs: [
            'Este sitio web se proporciona "tal cual", sin ningún tipo de garantía. No nos hacemos responsables de ninguna pérdida derivada del uso de la información de este sitio web, incluidas, entre otras, las decisiones de viaje basadas en su contenido.',
          ],
        },
      ],
    },
    cookie: {
      title: 'Configuración de Cookies',
      updated: 'Última actualización: julio de 2026',
      sections: [
        {
          heading: 'Cookies necesarias',
          paragraphs: ['Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.'],
        },
        {
          heading: 'Cookies de análisis',
          paragraphs: ['Google Analytics (se puede activar/desactivar manualmente)', 'Al recopilar datos de uso anónimos, nos ayudan a comprender cómo interactúan los visitantes con nuestro sitio web.'],
        },
        {
          heading: 'Cookies de preferencias',
          paragraphs: ['Preferencias del usuario (se pueden activar/desactivar manualmente)', 'Recuerdan sus ajustes personalizados (como el idioma y el tema).'],
        },
        {
          heading: 'Cookies de marketing',
          paragraphs: ['Publicidad personalizada (desactivada por defecto)', 'Se utilizan para mostrar contenido relevante y medir la efectividad de las campañas publicitarias.'],
        },
        {
          heading: 'Gestión del consentimiento',
          paragraphs: ['Puede cambiar su configuración de cookies en cualquier momento. Tenga en cuenta que desactivar ciertas cookies puede afectar a algunas funciones del sitio web.'],
        },
      ],
      buttons: ['Guardar preferencias', 'Rechazar todo'],
    },
  },
  fr: {
    privacy: {
      title: 'Politique de Confidentialité',
      updated: 'Dernière mise à jour : juillet 2026',
      sections: [
        {
          heading: 'Informations que nous recueillons',
          paragraphs: ['Nous ne recueillons que les données minimales nécessaires à la fourniture de notre service. Celles-ci peuvent inclure :'],
          list: [
            'Données de navigation (adresse IP, type de navigateur, pages visitées)',
            'Cookies et technologies similaires',
            'Toute information que vous fournissez volontairement via notre formulaire de contact ou par e-mail',
          ],
        },
        {
          heading: 'Comment nous utilisons vos informations',
          paragraphs: ['Nous utilisons les informations recueillies pour :'],
          list: ['Améliorer le contenu du site et l’expérience utilisateur', 'Analyser le trafic et les modes d’utilisation', 'Répondre aux demandes', 'Nous conformer à nos obligations légales'],
        },
        {
          heading: 'Services tiers',
          paragraphs: [
            'Notre site web peut utiliser des services tiers tels que Google Maps (pour les cartes intégrées et les données de localisation), Google Analytics (pour l’analyse du trafic) et Unsplash (pour les images). Ces services ont leurs propres politiques de confidentialité.',
          ],
        },
        {
          heading: 'Vos droits',
          paragraphs: ['Conformément au Règlement Général sur la Protection des Données (RGPD) et aux lois connexes, vous avez le droit de :'],
          list: ['Accéder à vos données personnelles', 'Demander la correction ou la suppression', 'Vous opposer au traitement ou le limiter', 'Déposer une plainte auprès d’une autorité de contrôle'],
        },
      ],
    },
    terms: {
      title: 'Conditions d’Utilisation',
      updated: 'Dernière mise à jour : juillet 2026',
      sections: [
        {
          heading: 'Utilisation du contenu',
          paragraphs: [
            'Tout le contenu de ce site web est fourni à des fins purement informatives. Nous sommes un site d’information touristique indépendant, sans lien avec aucune attraction touristique, organisme gouvernemental ou opérateur commercial.',
          ],
        },
        {
          heading: 'Exactitude des informations',
          paragraphs: [
            'Nous nous efforçons de fournir des informations exactes et à jour, mais ne pouvons garantir leur intégralité ou leur exactitude. Itinéraires, conditions et services peuvent changer sans préavis. Vérifiez toujours les informations importantes via les canaux officiels avant de voyager.',
          ],
        },
        {
          heading: 'Propriété intellectuelle',
          paragraphs: [
            'La conception et le contenu original de ce site web sont protégés par le droit d’auteur. Les images proviennent d’Unsplash et sont utilisées sous licence. L’utilisation des données Google Maps respecte les Conditions d’utilisation de Google.',
          ],
        },
        {
          heading: 'Limitation de responsabilité',
          paragraphs: [
            'Ce site web est fourni « en l’état », sans aucune garantie. Nous ne sommes pas responsables de toute perte découlant de l’utilisation des informations de ce site, y compris, sans s’y limiter, des décisions de voyage fondées sur son contenu.',
          ],
        },
      ],
    },
    cookie: {
      title: 'Paramètres des Cookies',
      updated: 'Dernière mise à jour : juillet 2026',
      sections: [
        {
          heading: 'Cookies nécessaires',
          paragraphs: ['Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.'],
        },
        {
          heading: 'Cookies d’analyse',
          paragraphs: ['Google Analytics (peut être activé/désactivé manuellement)', 'En collectant des données d’utilisation anonymes, ils nous aident à comprendre comment les visiteurs interagissent avec notre site.'],
        },
        {
          heading: 'Cookies de préférences',
          paragraphs: ['Préférences utilisateur (peuvent être activées/désactivées manuellement)', 'Mémorisent vos paramètres personnalisés (comme la langue et le thème).'],
        },
        {
          heading: 'Cookies marketing',
          paragraphs: ['Publicité personnalisée (désactivée par défaut)', 'Utilisés pour afficher du contenu pertinent et mesurer l’efficacité des campagnes publicitaires.'],
        },
        {
          heading: 'Gestion du consentement',
          paragraphs: ['Vous pouvez modifier vos paramètres de cookies à tout moment. Notez que la désactivation de certains cookies peut affecter certaines fonctionnalités du site.'],
        },
      ],
      buttons: ['Enregistrer les préférences', 'Tout refuser'],
    },
  },
  nl: {
    privacy: {
      title: 'Privacybeleid',
      updated: 'Laatst bijgewerkt: juli 2026',
      sections: [
        {
          heading: 'Informatie die wij verzamelen',
          paragraphs: ['Wij verzamelen alleen de minimale gegevens die nodig zijn om onze dienst te leveren. Dit kan het volgende omvatten:'],
          list: [
            'Navigatiegegevens (IP-adres, browsertype, bezochte pagina’s)',
            'Cookies en vergelijkbare technologieën',
            'Alle informatie die u vrijwillig verstrekt via ons contactformulier of e-mail',
          ],
        },
        {
          heading: 'Hoe wij uw gegevens gebruiken',
          paragraphs: ['Wij gebruiken de verzamelde gegevens om:'],
          list: ['De inhoud van de website en de gebruikerservaring te verbeteren', 'Verkeer en gebruikspatronen te analyseren', 'Op verzoeken te reageren', 'Te voldoen aan onze wettelijke verplichtingen'],
        },
        {
          heading: 'Diensten van derden',
          paragraphs: [
            'Onze website kan gebruikmaken van diensten van derden zoals Google Maps (voor ingesloten kaarten en locatiegegevens), Google Analytics (voor verkeersanalyse) en Unsplash (voor afbeeldingen). Deze diensten hebben hun eigen privacybeleid.',
          ],
        },
        {
          heading: 'Uw rechten',
          paragraphs: ['Op grond van de Algemene Verordening Gegevensbescherming (AVG) en aanverwante wetten heeft u het recht om:'],
          list: ['Toegang te krijgen tot uw persoonsgegevens', 'Correctie of verwijdering te verzoeken', 'Bezwaar te maken tegen of de verwerking te beperken', 'Een klacht in te dienen bij een toezichthouder'],
        },
      ],
    },
    terms: {
      title: 'Algemene Voorwaarden',
      updated: 'Laatst bijgewerkt: juli 2026',
      sections: [
        {
          heading: 'Gebruik van inhoud',
          paragraphs: [
            'Alle inhoud op deze website wordt uitsluitend ter informatie aangeboden. Wij zijn een onafhankelijke website met reisinformatie van derden en zijn niet verbonden aan enige toeristische attractie, overheidsinstantie of commerciële aanbieder.',
          ],
        },
        {
          heading: 'Juistheid van informatie',
          paragraphs: [
            'Wij streven ernaar nauwkeurige en actuele informatie te verstrekken, maar kunnen de volledigheid of juistheid niet garanderen. Reisroutes, omstandigheden en diensten kunnen zonder voorafgaande kennisgeving wijzigen. Controleer belangrijke informatie altijd via officiële kanalen voordat u reist.',
          ],
        },
        {
          heading: 'Intellectueel eigendom',
          paragraphs: [
            'Het ontwerp en de oorspronkelijke inhoud van deze website zijn auteursrechtelijk beschermd. De afbeeldingen komen van Unsplash en worden onder licentie gebruikt. Het gebruik van Google Maps-gegevens voldoet aan de Servicevoorwaarden van Google.',
          ],
        },
        {
          heading: 'Beperking van aansprakelijkheid',
          paragraphs: [
            'Deze website wordt "as is" aangeboden zonder enige garantie. Wij zijn niet aansprakelijk voor enig verlies voortvloeiend uit het gebruik van de informatie op deze website, waaronder, maar niet uitsluitend, reisbeslissingen op basis van de inhoud ervan.',
          ],
        },
      ],
    },
    cookie: {
      title: 'Cookie-instellingen',
      updated: 'Laatst bijgewerkt: juli 2026',
      sections: [
        {
          heading: 'Noodzakelijke cookies',
          paragraphs: ['Deze cookies zijn essentieel voor het functioneren van de website en kunnen niet worden uitgeschakeld.'],
        },
        {
          heading: 'Analytische cookies',
          paragraphs: ['Google Analytics (kan handmatig worden in- of uitgeschakeld)', 'Door het verzamelen van anonieme gebruiksgegevens helpen ze ons te begrijpen hoe bezoekers met onze website omgaan.'],
        },
        {
          heading: 'Voorkeurscookies',
          paragraphs: ['Gebruikersvoorkeuren (kunnen handmatig worden in- of uitgeschakeld)', 'Onthouden uw persoonlijke instellingen (zoals taal- en themavoorkeuren).'],
        },
        {
          heading: 'Marketingcookies',
          paragraphs: ['Gepersonaliseerde advertenties (standaard uitgeschakeld)', 'Worden gebruikt om relevante inhoud te tonen en de effectiviteit van advertentiecampagnes te meten.'],
        },
        {
          heading: 'Toestemmingsbeheer',
          paragraphs: ['U kunt uw cookie-instellingen op elk moment wijzigen. Houd er rekening mee dat het uitschakelen van bepaalde cookies sommige functies van de website kan beïnvloeden.'],
        },
      ],
      buttons: ['Voorkeuren opslaan', 'Alles weigeren'],
    },
  },
};
