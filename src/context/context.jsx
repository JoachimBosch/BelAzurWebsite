import axios from "axios";
import { createContext, useEffect, useState } from "react";

const MyContext = createContext();

const _LANGUAGE_ = {
    english: {
        serviceButton: "BACK TO ALL SERVICES",
        getInTouch: "Call us today",
        mailUs: "Contact us",
        navbarItem1: "HOME",
        navbarItem2: "SERVICES",
        navbarItem3: "ABOUT US",
        navbarItem4: "CONTACT",
        navbarLanguage: "CHANGE LANGUAGE",
        onePage: "ONE-PAGE WEBSITE",
        multiPage: "MULTI-PAGE WEBSITE",
        ecommerce: "E-COMMERCE",
        mobileApps: "MOBILE APPS",
        introSubHeader1:
            "At Bel'Azur Coding, we specialize in creating tailored, high-performance websites that are as unique as your business.",
        introSubHeader2:
            "We offer a strong commitment to quality and a flair for elegant, hand-coded solutions.",
        introSubHeader3: "Together, we turn your digital dreams into reality.",
        philosophyHeader: "OUR PHILOSOPHY",
        philosophyText1:
            "We believe in clean code, clean design, and clear communication. Every project we take on is a collaborative journey, and your satisfaction is our ultimate goal.",
        philosophyText2:
            "From concept to launch, we're here to ensure your digital presence makes a powerful impact.",
        philosophyClosing:
            "< Let's transform your ideas into an exceptional online experience />",
        whyUsHeader1: "Tailored Development",
        whyUsText1:
            "We don't rely on cookie-cutter templates. Every line of code we write is thoughtfully crafted to fit your unique business needs. Our approach ensures that your website not only stands out visually but also performs efficiently, delivering a seamless user experience across all devices. We work closely with you to understand your brand and goals, translating your vision into a digital solution that truly represents your identity.",
        whyUsHeader2: "Manual Coding Experts",
        whyUsText2:
            "We don't only depend on WordPress or other ready-made platforms. Instead, we pride ourselves on our expertise in hand-coding websites. By building from scratch, we provide you with solutions that are faster, more secure, and highly customizable. This approach ensures your website is optimized for performance, resistant to common security threats, and easy to scale as your business grows. When you choose Bel'Azur Coding, you choose reliability, precision, and adaptability.",
        whyUsHeader3: "Future-Ready Apps",
        whyUsText3:
            "Our expertise doesn’t stop at websites. We are also preparing to offer mobile application development for both iOS and Android platforms. Utilizing the powerful React Native framework, we will deliver apps that feature rich, intuitive user interfaces and flawless functionality. This technology enables us to create robust, cross-platform apps that reach your audience wherever they are. As your business evolves, our future-ready app solutions will be designed to keep you at the cutting edge of digital innovation.",
        whyUsHeader4: "Multilingual Service",
        whyUsText4:
            "Communication is key to any successful project, and at Bel'Azur Coding, we make it effortless. We provide services in Dutch, French, and English. Our linguistic versatility ensures that we can work efficiently with a diverse range of clients, catering to both local and international businesses. Our commitment to clear, consistent communication means you'll always be in the loop, no matter where you are in the world.",
        allServicesHeader: "Discover how we can help you",
        allServicesSubHeader: "Services based on your actual needs",
        allServicesText:
            "At Bel'Azur Coding, we are passionate about delivering exceptional web and app development solutions that help your business stand out in the digital landscape. We take a personalized approach to every project, ensuring that the final product aligns perfectly with your goals and vision. From single-page websites to complex e-commerce platforms and cutting-edge mobile apps, we are equipped to bring your ideas to life.",
        vitrineHeader: "Simple, Impactful One-Page Websites for Your Business.",
        vitrineIntro1:
            "A one-page website is a simple concept. It's an affordable web design that actually consists of two pages: a front page and a contact page.",
        vitrineIntro2:
            "On your front page, you introduce yourself to the public. You can tell who you are, what you do - and maybe why you do it, and so much more.",
        vitrineIntro3:
            "Your contact page provides a way for people to get in touch with you. This can be a contact form, an address link, a link to your social media page, etc.",
        vitrineIntro4: "The possibilities are endless.",
        vitrinePerfect: "Perfect for",
        vitrineBenefitsHeader: "Benefits",
        vitrineBox1:
            "Think of it as a beautifully designed online brochure. All the important information about your business is on one single page, making it easy for your customers to understand who you are and what you offer without clicking around too much. It's simple, but it packs a punch—delivering your message in a way that grabs attention and encourages action.",
        vitrinePerfectFor: [
            "Promoting an event or special offer",
            "Highlighting a main product or service",
            "Showing off your work or achievements in a simple portfolio",
            "Setting your first steps online",
        ],
        vitrineBenefits: [
            "A domain name reflecting the name of your business",
            "Fast setup with minimal costs",
            "Perfect for small businesses or individuals starting out online",
            "Mobile-friendly design ensures a great experience for all users",
        ],
        websiteHeader:
            "Tailored Multi-Page Websites That Grow With Your Business",
        websiteIntro1:
            "A multi-page website is ideal for businesses that need to present a lot of information in an organized, engaging way.",
        websiteIntro2:
            "Whether you're an event planner outlining your services, a construction firm showcasing your past projects, or a community organization sharing resources.",
        websiteIntro3:
            "We create a website that's easy to navigate and enjoyable for visitors to explore.",
        websitePerfect: "Perfect for",
        websiteBenefitsHeader: "Benefits",
        websiteBox1:
            "Think of it as a full digital experience. Instead of packing everything onto one page, we spread your content across several well-organized pages, like “About Us”, “Services”, “Portfolio”, or “Contact”. This layout helps guide visitors through your site, giving them the details they need without overwhelming them. It's flexible and built to grow as your business evolves.",
        websitePerfectFor: [
            "Service-based companies that need to describe various offerings",
            "Organizations sharing resources, news, or events",
            "Businesses with a large portfolio of work to showcase",
            "Content-driven platforms that provide regular updates",
        ],
        websiteBenefits: [
            "Helps visitors find information quickly and easily",
            "Reflects a polished, credible image for your brand",
            "Allows for rich, detailed content like blogs, galleries, and portfolios",
            "Perfect for businesses that plan to grow and add more services or pages",
        ],
        ecommerceHeader:
            "Drive Sales and Reach New Customers with a Seamless Online Shopping Experience",
        ecommerceIntro1:
            "E-commerce websites are designed to help you start selling online easily and effectively.",
        ecommerceIntro2:
            "Whether you're a local artisan launching your first online shop, or a retail business ready to go global,",
        ecommerceIntro3:
            "we build a secure, beautiful online store that makes shopping easy for your customers and managing orders a breeze for you.",
        ecommerceIntro4: "Your options are limitless.",
        ecommercePerfect: "Perfect for",
        ecommerceBenefitsHeader: "Benefits",
        ecommerceBox1:
            "It's your complete online store where you can sell your own products or services. We can set it up using Shopify for a simple, ready-made solution or custom-build it for more control and flexibility. From displaying your products in an attractive layout to offering multiple payment options, we make sure your store is easy to use and optimized for sales.",
        ecommercePerfectFor: [
            "Businesses launching their first online store",
            "Retailers looking to expand their reach and sell more products",
            "Businesses that need a tailored e-commerce experience",
            "Shops wanting to offer easy, secure payment options",
        ],
        ecommerceBenefits: [
            "Sell to customers locally, nationally, or globally",
            "Generate revenue even when your physical store is closed",
            "Safe and diverse payment options build customer trust",
            "Tailored designs to match your brand and attract buyers",
        ],
        appDevHeader:
            "Build Your Brand's Presence in the Palm of Your Customers",
        appDevIntro1:
            "Our app development services are perfect for businesses ready to make a big impact on mobile.",
        appDevIntro2:
            "Whether you want to create a food ordering app, streamline your booking process, or launch something entirely unique,",
        appDevIntro3:
            "we design and build apps that are fast, reliable, and easy to use.",
        appDevIntro4:
            "Your customers will enjoy a smooth experience on both iOS and Android, and you’ll have the tech to support your business growth.",
        appDevPerfect: "Perfect for",
        appDevBenefitsHeader: "Benefits",
        appDevBox1:
            "It's about bringing your ideas to life in the palm of your customers' hands. We use React Native, a powerful technology stack that allows us to build apps efficiently for both iOS and Android with just one codebase. This means faster development, fewer maintenance headaches, and consistent performance across devices. Our apps are custom-made to fit your business, ensuring they look great and work perfectly.",
        appDevPerfectFor: [
            "Businesses wanting to connect with customers through mobile",
            "Companies looking to streamline processes",
            "Brands with unique app ideas that require a tailored experience",
            "Startups aiming for efficient development and long-term scalability",
        ],
        appDevBenefits: [
            "Keep customers connected with your business anytime, anywhere",
            "Automate bookings, payments, and other key functions for improved efficiency",
            "One app that works perfectly on both iOS and Android",
            "A user-friendly app keeps customers coming back",
        ],
        aboutUsHeader: "Meet the team",
        aboutLisa:
            "Lisa is the driving force behind Bel'Azur Coding. Without her, this website would probably not even exist. Lisa has an eye for design, enjoys solving the most difficult questions and does not shy away from any challenge. Thanks to her studies through SheCodes, she is perfectly capable of building beautiful, mobile-friendly and interactive websites that put your company into a new light.",
        aboutJoachim:
            "Joachim is the geek of the duo. He's always had a strong interest in web design and is constantly acquiring new skills. Thanks to a Full Stack certificate issued by 4Geeks Academy and a recent course in React Native, he is able to develop complex and modern websites, e-commerce platforms and mobile applications.",
        contactHeader: "Contact us",
        contactFirstName: "First Name",
        contactLastName: "Last Name",
        contactPhone: "Phone Number",
        contactEmail: "Email Address",
        contactCompany: "Company",
        contactInterest: "I'm interested in",
        contactInterestOption1: "Select an option",
        contactInterestOption2: "One-Page Website",
        contactInterestOption3: "Multi-Page Website",
        contactInterestOption4: "E-commerce Website",
        contactInterestOption5: "Other",
        contactAdditionalInfo: "Additional information",
        contactButton: "Submit",
        contactIsRequired: "is required",
        contactNumeric: "Phone number must be numeric",
        contactEmailError: "Invalid email address",
        contactEmailRequired: "Email is required",
        contactEmailSentSuccess: "Email sent successfully!",
        contactEmailSentError: "Failed to send email. Please try again.",
    },
    french: {
        serviceButton: "RETOURNEZ VERS TOUS LES SERVICES",
        getInTouch: "Appelez-nous",
        mailUs: "Contactez-nous",
        navbarItem1: "ACCEUIL",
        navbarItem2: "SERVICES",
        navbarItem3: "A PROPOS DE NOUS",
        navbarItem4: "CONTACT",
        navbarLanguage: "CHANGER LA LANGUE",
        onePage: "SITE WEB SIMPLE",
        multiPage: "SITE WEB MULTI-PAGES",
        ecommerce: "E-COMMERCE",
        mobileApps: "APPLICATIONS MOBILES",
        introSubHeader1:
            "Chez Bel'Azur Coding, nous nous spécialisons dans la création de sites web sur mesure et performants, aussi uniques que votre entreprise.",
        introSubHeader2:
            "Nous offrons un engagement fort envers la qualité et un goût pour des solutions élégantes et codées à la main.",
        introSubHeader3:
            "Ensemble, nous transformons vos rêves numériques en réalité.",
        philosophyHeader: "NOTRE PHILOSOPHIE",
        philosophyText1:
            "Nous croyons en un code propre, un design clair et une communication transparente. Chaque projet est une collaboration, et votre satisfaction est notre objectif ultime.",
        philosophyText2:
            "De la conception au lancement, nous veillons à ce que votre présence digitale ait un impact puissant.",
        philosophyClosing:
            "< Transformons vos idées en une expérience exceptionnelle />",
        whyUsHeader1: "Développement Sur Mesure",
        whyUsText1:
            "Nous n'utilisons pas de modèles standard. Chaque ligne de code que nous écrivons est soigneusement conçue pour répondre aux besoins uniques de votre entreprise. Notre approche garantit que votre site web se distingue non seulement visuellement mais aussi par ses performances, offrant une expérience utilisateur fluide sur tous les appareils. Nous travaillons en étroite collaboration avec vous pour comprendre votre marque et vos objectifs, et pour traduire votre vision en une solution numérique qui reflète véritablement votre identité.",
        whyUsHeader2: "Experts en Codage Manuel",
        whyUsText2:
            "Nous ne dépendons pas uniquement de WordPress ou d'autres plateformes prêtes à l'emploi. Nous sommes fiers de notre expertise en codage manuel. En construisant de zéro, nous vous offrons des solutions plus rapides, plus sécurisées et hautement personnalisables. Cette approche garantit que votre site est optimisé pour les performances, résistant aux menaces de sécurité courantes et facile à faire évoluer à mesure que votre entreprise grandit. Avec Bel'Azur Coding, vous choisissez fiabilité, précision et adaptabilité.",
        whyUsHeader3: "Applications Prêtes pour l'Avenir",
        whyUsText3:
            "Notre expertise ne s'arrête pas aux sites web. Nous nous préparons également à offrir le développement d'applications mobiles pour les plateformes iOS et Android. Grâce au puissant framework React Native, nous créerons des applications avec des interfaces utilisateur riches et intuitives et une fonctionnalité sans faille. Cette technologie nous permet de concevoir des applications robustes et multiplateformes qui atteignent votre audience où qu'elle soit. À mesure que votre entreprise évolue, nos solutions d'applications prêtes pour l'avenir vous permettront de rester à la pointe de l'innovation numérique.",
        whyUsHeader4: "Service Multilingue",
        whyUsText4:
            "La communication est la clé de tout projet réussi, et chez Bel'Azur Coding, nous la rendons simple. Nous proposons nos services en néerlandais, français et anglais. Notre polyvalence linguistique garantit que nous pouvons travailler efficacement avec une gamme diversifiée de clients, locaux et internationaux. Notre engagement envers une communication claire et cohérente signifie que vous serez toujours informé, où que vous soyez dans le monde.",
        allServicesHeader: "Comment pouvons-nous vous aider ?",
        allServicesSubHeader: "Des services adaptés à vos besoins réels",
        allServicesText:
            "Chez Bel'Azur Coding, nous sommes passionnés par la livraison de solutions exceptionnelles de développement web et d'applications qui aident votre entreprise à se démarquer dans le paysage numérique. Nous adoptons une approche personnalisée pour chaque projet, en veillant à ce que le produit final s'aligne parfaitement sur vos objectifs et votre vision. Des sites web d'une seule page aux plateformes e-commerce complexes et aux applications mobiles à la pointe de la technologie, nous sommes équipés pour donner vie à vos idées.",
        vitrineHeader:
            "Des sites web simples et percutants pour votre entreprise.",
        vitrineIntro1:
            "Un site web d'une page est un concept simple. C'est une conception web abordable qui se compose en réalité de deux pages : une page d'accueil et une page de contact.",
        vitrineIntro2:
            "Sur votre page d'accueil, vous vous présentez au public. Vous pouvez dire qui vous êtes, ce que vous faites - et peut-être pourquoi vous le faites, et bien plus encore.",
        vitrineIntro3:
            "Votre page de contact fournit un moyen pour les gens de vous contacter. Cela peut être un formulaire de contact, un lien d'adresse, un lien vers votre page de médias sociaux, etc.",
        vitrineIntro4: "Les possibilités sont infinies.",
        vitrinePerfect: "Parfait pour",
        vitrineBenefitsHeader: "Avantages",
        vitrineBox1:
            "Considérez-le comme une brochure en ligne magnifiquement conçue. Toutes les informations importantes sur votre entreprise sont sur une seule page, ce qui permet à vos clients de comprendre facilement qui vous êtes et ce que vous proposez sans trop de clics. C'est simple, mais ça a de l'impact—transmettant votre message de manière à capter l'attention et encourager l'action.",
        vitrinePerfectFor: [
            "Promouvoir un événement ou une offre spéciale",
            "Mettre en avant un produit ou un service principal",
            "Montrer votre travail ou vos réalisations dans un portfolio simple",
            "Faire vos premiers pas en ligne",
        ],
        vitrineBenefits: [
            "Un nom de domaine reflétant le nom de votre entreprise",
            "Mise en place rapide avec des coûts minimes",
            "Parfait pour les petites entreprises ou les particuliers débutant en ligne",
            "Un design adapté aux mobiles garantit une excellente expérience pour tous les utilisateurs",
        ],
        websiteHeader:
            "Des sites web multi-pages qui évoluent avec votre entreprise",
        websiteIntro1:
            "Un site Web multi-pages est idéal pour les entreprises qui ont besoin de présenter beaucoup d'informations d'une manière organisée et attrayante,",
        websiteIntro2:
            "Qu'il s'agisse d'un organisateur d'événements qui présente ses services, d'une entreprise de construction qui présente ses projets antérieurs ou d'un organisme communautaire qui partage ses ressources,",
        websiteIntro3:
            "Nous créons un site web facile à parcourir et agréable à explorer pour les visiteurs.",
        websitePerfect: "Parfait pour",
        websiteBenefitsHeader: "Avantages",
        websiteBox1:
            "Il s'agit d'une expérience numérique complète. Au lieu de tout mettre sur une seule page, nous répartissons votre contenu sur plusieurs pages bien organisées, comme « À propos de nous », « Services », « Portfolio » ou « Contact ». Cette disposition permet de guider les visiteurs à travers votre site, en leur donnant les détails dont ils ont besoin sans les submerger. Le site est flexible et conçu pour s'adapter à l'évolution de votre entreprise",
        websitePerfectFor: [
            "Les entreprises de services qui ont besoin de décrire leurs différentes offres",
            "Les organisations qui partagent des ressources, des nouvelles ou des événements",
            "Les entreprises ayant un large portefeuille de travaux à présenter",
            "Plateformes axées sur le contenu qui fournissent des mises à jour régulières",
        ],
        websiteBenefits: [
            "Aide les visiteurs à trouver des informations rapidement et facilement",
            "Reflète une image soignée et crédible de votre marque",
            "Permet un contenu riche et détaillé comme des blogs, des galeries et des portfolios",
            "Parfait pour les entreprises qui prévoient de se développer et d'ajouter des services ou des pages",
        ],
        ecommerceHeader:
            "Stimuler les ventes et atteindre de nouveaux clients grâce à une expérience d'achat en ligne transparente",
        ecommerceIntro1:
            "Les sites de commerce électronique sont conçus pour vous aider à vendre en ligne facilement et efficacement.",
        ecommerceIntro2:
            "Que vous soyez un artisan local qui lance sa première boutique en ligne ou une entreprise de vente au détail prête à s'internationaliser,",
        ecommerceIntro3:
            "nous créons une boutique en ligne sécurisée et esthétique qui facilite les achats de vos clients et la gestion des commandes pour vous.",
        ecommerceIntro4: "Vos options sont illimitées.",
        ecommercePerfect: "Parfait pour",
        ecommerceBenefitsHeader: "Avantages",
        ecommerceBox1:
            "Il s'agit d'une boutique en ligne complète où vous pouvez vendre vos propres produits ou services. Nous pouvons l'installer à l'aide de Shopify pour une solution simple et prête à l'emploi ou la construire sur mesure pour plus de contrôle et de flexibilité. De l'affichage de vos produits dans une présentation attrayante à l'offre de plusieurs options de paiement, nous veillons à ce que votre boutique soit facile à utiliser et optimisée pour les ventes",
        ecommercePerfectFor: [
            "Les entreprises qui lancent leur première boutique en ligne",
            "Les détaillants qui cherchent à étendre leur portée et à vendre plus de produits",
            "Les entreprises qui ont besoin d'une expérience de commerce électronique sur mesure",
            "Boutiques souhaitant offrir des options de paiement faciles et sûres",
        ],
        ecommerceBenefits: [
            "Vendre à des clients au niveau local, national ou mondial",
            "Générer des revenus même lorsque votre magasin physique est fermé",
            "Des options de paiement sûres et diversifiées renforcent la confiance des clients",
            "Des designs sur mesure pour correspondre à votre marque et attirer les acheteurs",
        ],
        appDevHeader:
            "Construisez la présence de votre marque dans la paume de la main de vos clients",
        appDevIntro1:
            "Nos services de développement d'applications sont parfaits pour les entreprises prêtes à avoir un impact important sur le mobile,",
        appDevIntro2:
            "Que vous souhaitiez créer une application de commande de nourriture, rationaliser votre processus de réservation ou lancer quelque chose de tout à fait unique,",
        appDevIntro3:
            "nous concevons et réalisons des applications rapides, fiables et faciles à utiliser.",
        appDevIntro4:
            "Vos clients bénéficieront d'une expérience fluide sur iOS et Android, et vous disposerez de la technologie nécessaire pour soutenir la croissance de votre entreprise",
        appDevPerfect: "Parfait pour",
        appDevBenefitsHeader: "Avantages",
        appDevBox1:
            "Il s'agit de donner vie à vos idées dans la paume des mains de vos clients. Nous utilisons React Native, une pile technologique puissante qui nous permet de construire efficacement des applications pour iOS et Android avec une seule base de code. Cela signifie un développement plus rapide, moins de maux de tête liés à la maintenance et des performances cohérentes sur tous les appareils. Nos applications sont conçues sur mesure pour s'adapter à votre entreprise, ce qui garantit qu'elles sont belles et qu'elles fonctionnent parfaitement.",
        appDevPerfectFor: [
            "Des entreprises qui veulent se connecter avec leurs clients par le biais de la téléphonie mobile",
            "Des entreprises qui cherchent à rationaliser les processus",
            "Des marques ayant des idées d'applications uniques qui nécessitent une expérience sur mesure",
            "Startups visant un développement efficace et une évolutivité à long terme",
        ],
        appDevBenefits: [
            "Gardez vos clients en contact avec votre entreprise partout",
            "Automatiser les réservations, les paiements et d'autres fonctions clés pour une meilleure efficacité",
            "Une seule application qui fonctionne parfaitement sur iOS et Android",
            "Une application conviviale fait revenir les clients",
        ],

        aboutUsHeader: "Présentation de l'équipe",
        aboutLisa:
            "Lisa est la force motrice de Bel'Azur Coding. Sans elle, ce site n'existerait probablement pas. Lisa a un œil pour le design, aime résoudre des questions difficiles et n'hésite pas à relever des défis. Grâce à sa formation chez SheCodes, elle est parfaitement capable de construire des sites web magnifiques, adaptés aux mobiles et interactifs qui présentent votre entreprise sous un nouveau jour.",
        aboutJoachim:
            "Joachim est le geek du duo. Il a toujours eu un fort intérêt pour la conception de sites web et ne cesse d'acquérir de nouvelles compétences. Grâce à un certificat Full Stack délivré par 4Geeks Academy et à un cours récent sur React Native, il est capable de développer des sites web complexes et modernes, des plateformes d' e-commerce et des applications mobiles.",
        contactHeader: "Contactez-nous",
        contactFirstName: "Prénom",
        contactLastName: "Nom de famille",
        contactPhone: "Numéro de téléphone",
        contactEmail: "Courriel",
        contactCompany: "Entreprise",
        contactInterest: "Je suis intéressé par",
        contactInterestOption1: "Sélectionnez une option",
        contactInterestOption2: "Site web une page",
        contactInterestOption3: "Site web multi-pages",
        contactInterestOption4: "Site web e-commerce",
        contactInterestOption5: "Autre",
        contactAdditionalInfo: "Informations supplémentaires",
        contactButton: "Envoyer",
        contactIsRequired: "est requis",
        contactNumeric: "Le numéro de téléphone doit être numérique",
        contactEmailError: "Adresse e-mail invalide",
        contactEmailRequired: "Un courriel est requis",
        contactEmailSentSuccess: "E-mail envoyé avec succès !",
        contactEmailSentError:
            "Échec de l'envoi de l'e-mail. Veuillez réessayer.",
    },

    dutch: {
        serviceButton: "TERUG NAAR ALLE DIENSTEN",
        getInTouch: "Bel ons vandaag",
        mailUs: "Contacteer ons",
        navbarItem1: "THUIS",
        navbarItem2: "DIENSTEN",
        navbarItem3: "OVER ONS",
        navbarItem4: "CONTACT",
        navbarLanguage: "VERANDER TAAL",
        onePage: "SINGLE-PAGE WEBSITE",
        multiPage: "MULTI-PAGE WEBSITE",
        ecommerce: "E-COMMERCE",
        mobileApps: "MOBILE APPS",
        introSubHeader1:
            "Bij Bel'Azur Coding bouwen we websites op maat die even uniek zijn als uw onderneming. Met een passie voor kwaliteit schrijven we elke regel code met zorg en precisie.",
        introSubHeader2:
            "We combineren vakmanschap en creativiteit om uw digitale dromen tot leven te brengen. ",
        introSubHeader3:
            "Samen maken we uw digitale dromen werkelijkheid.",
        philosophyHeader: "ONZE FILOSOFIE",
        philosophyText1:
            "Bij Bel'Azur Coding draait alles om eenvoud, kwaliteit en samenwerking. We geloven in propere code, strak design en open communicatie.",
        philosophyText2:
            "Van het eerste idee tot de grote lancering: wij zorgen ervoor dat uw digitale aanwezigheid niet alleen gezien wordt, maar ook écht indruk maakt.",
        philosophyClosing:
            "< Samen maken we van uw idee een unieke digitale ervaring />",
        whyUsHeader1: "Ontwerp op maat",
        whyUsText1:
            "Bij ons geen standaard sjablonen of bandwerk. We luisteren naar uw verhaal, leren uw onderneming door en door kennen, en bouwen een website die perfect bij u en uw klanten past. Met zorg en vakmanschap schrijven we elke regel code. Het resultaat? Een website die niet alleen gezien mag worden, maar ook doet wat ze moet doen: snel, gebruiksvriendelijk en mooi op elk toestel. Wij geloven in samenwerking. Samen vertalen we uw visie naar een digitale ervaring die uw merk écht weerspiegelt. Of u nu een eenvoudige website wil of een uitgebreide oplossing, wij zetten ons helemaal in om uw verwachtingen te overtreffen.",
        whyUsHeader2: "Experts in coderen",
        whyUsText2:
            "Bij ons geen shortcuts of one-size-fits-all oplossingen. Wij bouwen uw website helemaal vanaf nul, met de hand geschreven code die uw project naar een hoger niveau tilt. Door deze aanpak kunnen we websites maken die sneller laden, beter beveiligd zijn en volledig op maat gemaakt worden voor uw specifieke noden. Geen gedoe met standaardoplossingen, maar een platform dat mee kan groeien met uw onderneming en toekomstplannen. Bij Bel'Azur Coding kiest u voor betrouwbaarheid, vakmanschap en flexibiliteit. Laat ons uw digitale ambities omzetten in een website die presteert en indruk maakt. Samen bouwen we iets waar u écht trots op kan zijn.",
        whyUsHeader3: "Innovatieve apps",
        whyUsText3:
            "We gaan verder dan alleen websites. Binnenkort bouwen we ook mobiele apps op maat, voor zowel iOS als Android. Met het krachtige React Native-framework ontwikkelen we intuïtieve apps met een vlotte werking en een aantrekkelijke, gebruiksvriendelijke interface. Deze technologie laat ons toe robuuste apps te maken die op elk platform presteren en uw klanten bereiken, waar ze ook zijn. Onze oplossingen groeien mee met uw onderneming en houden u altijd aan de top van digitale innovatie. Met Bel'Azur Coding kiest u voor apps die niet alleen werken, maar ook indruk maken. Klaar om de mobiele wereld te veroveren?",
        whyUsHeader4: "Taal is onze troef",
        whyUsText4:
            "Bij Bel'Azur Coding geloven we in duidelijke communicatie, in welke taal dan ook. Of u nu Nederlands, Frans of Engels spreekt, wij zorgen ervoor dat iedereen op dezelfde golflengte zit en dat uw project vlekkeloos verloopt. Onze meertalige service maakt samenwerken eenvoudig, of u nu om de hoek zit of aan de andere kant van de wereld. We passen ons aan uw voorkeuren aan en zorgen ervoor dat elke stap in het proces helder wordt gecommuniceerd. Met onze taalkundige veelzijdigheid overbruggen we grenzen en creëren we verbinding. Bij Bel'Azur Coding is taal geen obstakel, maar een brug naar succes. Samen realiseren we uw digitale dromen, zonder compromissen.",
        allServicesHeader: "Hoe we u kunnen helpen:",
        allServicesSubHeader:
            "Diensten gebaseerd op uw daadwerkelijke behoeften",
        allServicesText:
            "Bij Bel'Azur Coding zijn we gepassioneerd over het leveren van uitzonderlijke web- en app-ontwikkelingsoplossingen die uw bedrijf helpen opvallen in het digitale landschap. We hanteren een persoonlijke aanpak voor elk project, waarbij we ervoor zorgen dat het eindproduct perfect aansluit bij uw doelen en visie. Van single-page websites tot complexe e-commerce platforms en geavanceerde mobiele apps, we zijn uitgerust om uw ideeën tot leven te brengen.",
        vitrineHeader:
            "Eenvoudige, impactvolle single-page websites voor uw bedrijf.",
        vitrineIntro1:
            "Een single-page website is een eenvoudig concept. Het is een betaalbaar webdesign dat eigenlijk uit twee pagina's bestaat: een voorpagina en een contactpagina.",
        vitrineIntro2:
            "Op je voorpagina stel je jezelf voor aan het publiek. Je kunt vertellen wie je bent, wat je doet - en misschien waarom je dat doet, en nog veel meer.",
        vitrineIntro3:
            "Je contactpagina biedt mensen een manier om met je in contact te komen. Dit kan een contactformulier zijn, een adreslink, een link naar je social media-pagina, enzovoort.",
        vitrineIntro4: "De mogelijkheden zijn eindeloos.",
        vitrinePerfect: "Perfect voor",
        vitrineBenefitsHeader: "Voordelen",
        vitrineBox1:
            "Zie het als een prachtig ontworpen online brochure. Alle belangrijke informatie over uw bedrijf staat op één enkele pagina, waardoor uw klanten gemakkelijk begrijpen wie u bent en wat u aanbiedt zonder al te veel rond te hoeven klikken. Het is eenvoudig, maar het heeft een grote impact - het overbrengen van uw boodschap op een manier die de aandacht trekt en aanzet tot actie.",
        vitrinePerfectFor: [
            "Een evenement of speciale aanbieding promoten",
            "Een belangrijk product of dienst onder de aandacht brengen",
            "Je werk of prestaties laten zien in een eenvoudig portfolio",
            "Je eerste stappen online te zetten",
        ],
        vitrineBenefits: [
            "Een domeinnaam die de naam van uw bedrijf weergeeft",
            "Snelle installatie met minimale kosten",
            "Perfect voor kleine bedrijven of particulieren die online beginnen",
            "Mobielvriendelijk ontwerp zorgt voor een geweldige ervaring voor alle gebruikers",
        ],
        websiteHeader:
            "Op maat gemaakte Multi-Page Websites die meegroeien met uw bedrijf",
        websiteIntro1:
            "Een website met meerdere pagina's is ideaal voor bedrijven die veel informatie op een georganiseerde, boeiende manier moeten presenteren.",
        websiteIntro2:
            "Of u nu een evenementenplanner bent die uw diensten uiteenzet, een bouwbedrijf dat uw eerdere projecten laat zien of een gemeenschapsorganisatie die hulpbronnen deelt.",
        websiteIntro3:
            "Een website met meerdere pagina's is ideaal voor bedrijven die veel informatie op een aantrekkelijke manier moeten presenteren.",
        websitePerfect: "Perfect voor",
        websiteBenefitsHeader: "Voordelen",
        websiteBox1:
            "Zie het als een volledige digitale ervaring. In plaats van alles op één pagina te zetten, verdelen we uw inhoud over verschillende goed georganiseerde pagina's, zoals “Over ons”, “Diensten”, “Portfolio” of “Contact”. Deze lay-out leidt bezoekers door je site en geeft ze de details die ze nodig hebben zonder ze te overweldigen. Het is flexibel en gebouwd om mee te groeien met de ontwikkeling van je bedrijf.",
        websitePerfectFor: [
            "Dienstverlenende bedrijven die verschillende aanbiedingen moeten beschrijven",
            "Organisaties die middelen, nieuws of evenementen delen",
            "Bedrijven met een groot portfolio aan werk om te laten zien",
            "Platformen met inhoud die regelmatig updates geven",
        ],
        websiteBenefits: [
            "Helpt bezoekers snel en gemakkelijk informatie te vinden",
            "Weerspiegelt een gepolijst, geloofwaardig imago voor uw merk",
            "Biedt ruimte voor rijke, gedetailleerde inhoud zoals blogs, galerijen en portfolio's",
            "Perfect voor bedrijven die van plan zijn te groeien en meer diensten of pagina's toe te voegen",
        ],
        ecommerceHeader:
            "Verkoop stimuleren en nieuwe klanten bereiken met een naadloze online winkelervaring",
        ecommerceIntro1:
            "E-commerce websites zijn ontworpen om u te helpen eenvoudig en effectief te beginnen met online verkopen.",
        ecommerceIntro2:
            "Of u nu een lokale ambachtsman bent die een eerste online winkel lanceert, of een detailhandelsbedrijf dat klaar is om wereldwijd te gaan,",
        ecommerceIntro3:
            "wij bouwen een veilige, mooie online winkel die winkelen makkelijk maakt voor uw klanten en het beheren van bestellingen een koud kunstje voor u.",
        ecommerceIntro4: "De opties zijn grenzeloos.",
        ecommercePerfect: "Perfect voor",
        ecommerceBenefitsHeader: "Voordelen",
        ecommerceBox1:
            "Het is uw complete online winkel waar u uw eigen producten of diensten kunt verkopen. We kunnen het opzetten met Shopify voor een eenvoudige, kant-en-klare oplossing of het op maat bouwen voor meer controle en flexibiliteit. Van het weergeven van je producten in een aantrekkelijke lay-out tot het aanbieden van meerdere betaalopties, wij zorgen ervoor dat je winkel gemakkelijk te gebruiken is en geoptimaliseerd is voor de verkoop.",
        ecommercePerfectFor: [
            "Bedrijven die hun eerste online winkel lanceren",
            "Detailhandelaren die hun bereik willen vergroten en meer producten willen verkopen",
            "Bedrijven die een e-commerce-ervaring op maat nodig hebben",
            "Winkels die eenvoudige, veilige betalingsopties willen bieden",
        ],
        ecommerceBenefits: [
            "Verkoop aan klanten lokaal, nationaal of wereldwijd",
            "Genereer inkomsten, zelfs als uw fysieke winkel gesloten is",
            "Veilige en diverse betalingsopties bouwen vertrouwen bij de klant op",
            "Ontwerpen op maat die bij je merk passen en kopers aantrekken",
        ],
        appDevHeader:
            "Bouw de aanwezigheid van uw merk in de handpalm van uw klanten",
        appDevIntro1:
            "Onze app-ontwikkelingsservices zijn perfect voor bedrijven die klaar zijn om een grote impact te maken op mobile.",
        appDevIntro2:
            "Of je nu een app voor het bestellen van eten wilt maken, je boekingsproces wilt stroomlijnen of iets heel unieks wilt lanceren,",
        appDevIntro3:
            "wij ontwerpen en bouwen apps die snel, betrouwbaar en gebruiksvriendelijk zijn.",
        appDevIntro4:
            "Uw klanten zullen genieten van een soepele ervaring op zowel iOS als Android, en u beschikt over de technologie om de groei van uw bedrijf te ondersteunen.",
        appDevPerfect: "Perfect voor",
        appDevBenefitsHeader: "Voordelen",
        appDevBox1:
            "Het gaat erom je ideeën tot leven te brengen in de palm van de hand van je klanten. We gebruiken React Native, een krachtige technologiestack waarmee we efficiënt apps kunnen bouwen voor zowel iOS als Android met slechts één codebase. Dit betekent snellere ontwikkeling, minder onderhoudsproblemen en consistente prestaties op verschillende apparaten. Onze apps worden op maat gemaakt voor uw bedrijf, zodat ze er geweldig uitzien en perfect werken.",
        appDevPerfectFor: [
            "Bedrijven die via mobiel in contact willen komen met klanten",
            "Bedrijven die processen willen stroomlijnen",
            "Merken met unieke app-ideeën die een ervaring op maat vereisen",
            "Startups die streven naar efficiënte ontwikkeling en schaalbaarheid op lange termijn",
        ],
        appDevBenefits: [
            "Houd klanten altijd en overal verbonden met uw bedrijf",
            "Automatiseer boekingen, betalingen en andere belangrijke functies voor verbeterde efficiëntie",
            "Eén app die perfect werkt op zowel iOS als Android",
            "Een gebruiksvriendelijke app zorgt ervoor dat klanten terugkomen",
        ],
        aboutUsHeader: "Het team",
        aboutLisa:
            "Lisa is de drijvende Kracht achter Bel’Azur Coding. Zonder haar had deze website waarschijnlijk niet eens bestaan. Lisa heeft oog voor design, lost graag de moeilijkste vraagstukken op en gaat geen enkele uitdaging uit de weg. Dankzij haar opleiding via SheCodes is zij perfect in staat om mooie, mobile-friendly en interactieve websites te bouwen die uw bedrijf in een nieuw daglicht stellen.",
        aboutJoachim:
            "Joachim is de nerd van het duo. Hij heeft altijd een sterke interesse gehad in webdesign en is continu bezig met het vergaren van nieuwe kennis. Dankzij een Full Stack certificaat uitgegeven door 4Geeks Academy en een recente cursus in React Native, is hij in staat complexe en moderne websites, e-commerce platformen en mobiele applicaties te ontwikkelen.",
        contactHeader: "Contacteer ons",
        contactFirstName: "Voornaam",
        contactLastName: "Achternaam",
        contactPhone: "Telefoonnummer",
        contactEmail: "E-mailadres",
        contactCompany: "Bedrijf",
        contactInterest: "Ik ben geïnteresseerd in",
        contactInterestOption1: "Selecteer een optie",
        contactInterestOption2: "Eenpagina-website",
        contactInterestOption3: "Meerdere pagina's website",
        contactInterestOption4: "E-commerce website",
        contactInterestOption5: "Anders",
        contactAdditionalInfo: "Aanvullende informatie",
        contactButton: "Verzenden",
        contactIsRequired: "is verplicht",
        contactNumeric: "Telefoonnummer moet numeriek zijn",
        contactEmailError: "Ongeldig e-mailadres",
        contactEmailRequired: "E-mailadres is verplicht",
        contactEmailSentSuccess: "E-mail succesvol verzonden!",
        contactEmailSentError: "E-mail verzenden mislukt. Probeer het opnieuw.",
    },
};

export const MyProvider = ({ children }) => {
    const [page, setPage] = useState("allServices");
    const [language, setLanguage] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("userLanguage") || "french";
        }
        return "french"; // Default value if window is not available
    });

    useEffect(() => {
        localStorage.setItem("userLanguage", language);
    }, [language]);

    /* Add all variables to appContext to sync them in the entire application */
    let appContext = {
        page,
        setPage,
        language,
        setLanguage,
        _LANGUAGE_,
    };

    return (
        <MyContext.Provider value={appContext}>{children}</MyContext.Provider>
    );
};

export default MyContext;
