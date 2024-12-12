import axios from "axios";
import { createContext, useEffect, useState } from "react";

const MyContext = createContext();

const _LANGUAGE_ = {
    english: {
        serviceButton: "BACK TO ALL SERVICES",
        getInTouch: "Call us to get started",
        mailUs: "Why don't we schedule a meeting?",
        navbarItem1: "HOME",
        navbarItem2: "SERVICES",
        navbarItem3: "ABOUT US",
        navbarItem4: "CONTACT",
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
        allServicesHeader: "Services based on your actual needs",
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
    },
    french: {
        serviceButton: "RETOUR VERS TOUS LES SERVICES",
        getInTouch: "Contactez-nous pour commencer",
        mailUs: "Pourquoi ne pas prendre rendez-vous ?",
        navbarItem1: "ACCEUIL",
        navbarItem2: "SERVICES",
        navbarItem3: "A PROPOS DE NOUS",
        navbarItem4: "CONTACT",
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
            "< Transformons vos idées en une expérience en ligne exceptionnelle />",
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
        allServicesHeader: "Des services adaptés à vos besoins réels",
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
    },

    dutch: {
        serviceButton: "TERUG NAAR ALLE DIENSTEN",
        getInTouch: "Contacteer ons vandaag",
        mailUs: "Waarom zetten we geen meeting op?",
        navbarItem1: "THUIS",
        navbarItem2: "DIENSTEN",
        navbarItem3: "OVER ONS",
        navbarItem4: "CONTACT",
        introSubHeader1:
            "Bij Bel'Azur Coding specialiseren we ons in het creëren van op maat gemaakte, hoogwaardige websites die net zo uniek zijn als uw bedrijf.",
        introSubHeader2:
            "We bieden een sterke toewijding aan kwaliteit en een flair voor elegante, handgeschreven oplossingen.",
        introSubHeader3: "Samen maken we uw digitale dromen werkelijkheid.",
        philosophyHeader: "ONZE FILOSOFIE",
        philosophyText1:
            "Wij geloven in schone code, helder ontwerp en duidelijke communicatie. Elk project is een samenwerkingsreis, en uw tevredenheid is ons ultieme doel.",
        philosophyText2:
            "Van concept tot lancering, we zorgen ervoor dat uw digitale aanwezigheid een krachtige impact maakt.",
        philosophyClosing:
            "< Laten we uw ideeën transformeren tot een uitzonderlijke online ervaring />",
        whyUsHeader1: "Ontwerp op maat",
        whyUsText1:
            "Wij vertrouwen niet op standaard sjablonen. Elke regel code die we schrijven, wordt zorgvuldig gemaakt om aan de unieke behoeften van uw bedrijf te voldoen. Onze aanpak zorgt ervoor dat uw website niet alleen visueel opvalt, maar ook efficiënt presteert, en een naadloze gebruikerservaring biedt op alle apparaten. We werken nauw met u samen om uw merk en doelen te begrijpen, en vertalen uw visie naar een digitale oplossing die echt uw identiteit vertegenwoordigt.",
        whyUsHeader2: "Experts in Handmatig Coderen",
        whyUsText2:
            "Wij vertrouwen niet alleen op WordPress of andere kant-en-klare platforms. Wij zijn trots op onze expertise in handmatig coderen van websites. Door vanaf nul te bouwen, bieden we u oplossingen die sneller, veiliger en zeer aanpasbaar zijn. Deze aanpak zorgt ervoor dat uw website is geoptimaliseerd voor prestaties, bestand is tegen veelvoorkomende beveiligingsrisico's, en gemakkelijk kan worden opgeschaald naarmate uw bedrijf groeit. Met Bel'Azur Coding kiest u voor betrouwbaarheid, precisie en flexibiliteit.",
        whyUsHeader3: "Toekomstbestendige Apps",
        whyUsText3:
            "Onze expertise stopt niet bij websites. We bereiden ons ook voor om mobiele applicaties te ontwikkelen voor zowel iOS- als Android-platforms. Met behulp van het krachtige React Native-framework leveren we apps met rijke, intuïtieve gebruikersinterfaces en vlekkeloze functionaliteit. Deze technologie stelt ons in staat om robuuste, cross-platform apps te creëren die uw publiek bereiken waar ze ook zijn. Naarmate uw bedrijf zich ontwikkelt, zorgen onze toekomstbestendige app-oplossingen ervoor dat u aan de voorhoede van digitale innovatie blijft.",
        whyUsHeader4: "Meertalige Service",
        whyUsText4:
            "Communicatie is de sleutel tot elk succesvol project, en bij Bel'Azur Coding maken we het moeiteloos. We bieden diensten aan in het Nederlands, Frans en Engels. Onze taalkundige veelzijdigheid zorgt ervoor dat we efficiënt kunnen werken met een diverse reeks klanten, zowel lokaal als internationaal. Onze toewijding aan duidelijke en consistente communicatie betekent dat u altijd op de hoogte bent, waar ter wereld u ook bent.",
        allServicesHeader: "Diensten gebaseerd op uw daadwerkelijke behoeften",
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
    },
};

export const MyProvider = ({ children }) => {
    const [page, setPage] = useState("allServices");
    const [language, setLanguage] = useState("french");

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
