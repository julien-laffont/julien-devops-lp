// Typed from French, the Reference language. A text still in French waits for its translation.
import type { Dictionary } from './fr';

const promise = 'Fewer bugs. Cleaner code. A SaaS ready to grow.';

export const en: Dictionary = {
	designation: 'DevOps consultant',
	promise,
	bookButton: 'Book a conversation',
	header: {
		logoTarget: 'home page',
		languages: 'Language',
		menu: 'Menu',
		resources: 'Resources',
	},
	animation: {
		pause: 'Pause animation',
		resume: 'Resume animation',
	},
	cloud: {
		link: 'Choosing a cloud',
		page: {
			title: 'Quel cloud choisir pour ton entreprise ?',
			description:
				'Le meilleur cloud dépend de ton produit, de ton équipe, de ta croissance, de ton budget et de tes contraintes réglementaires. Compare les fournisseurs selon tes priorités.',
			intro:
				'Le meilleur cloud dépend de ton produit, de ton équipe, de ta croissance, de ton budget et de tes contraintes réglementaires. Compare les options selon ton contexte, plutôt que de choisir un fournisseur uniquement sur sa notoriété.',
			cta: {
				title: 'Tu hésites entre plusieurs architectures ?',
				text: 'Parlons de ton projet et comparons les options adaptées à tes contraintes.',
			},
		},
		chart: {
			title: 'Compare les fournisseurs selon tes priorités',
			instruction:
				'Choisis un scénario pour voir les points forts, les limites et les sources officielles de chaque fournisseur.',
			scenariosLabel: 'Company scenario',
			scenarios: {
				beforeLaunch: {
					name: 'Before launch',
					description: 'A small team, with no time to run servers.',
				},
				growth: {
					name: 'Growing SaaS',
					description: 'The product already has customers and the team is growing.',
				},
				dataSovereignty: {
					name: 'Data sovereignty',
					description:
						'Data must stay in the EU, with a European provider, or the sector requires SecNumCloud.',
				},
				variableLoad: {
					name: 'Highly variable load',
					description: 'Strong peaks and quiet periods.',
				},
				costControl: {
					name: 'Maîtrise des coûts',
					description: 'See and control infrastructure costs as the SaaS grows.',
				},
			},
			criteria: {
				kubernetes: 'Managed Kubernetes',
				containers: 'Autoscaling containers',
				paas: 'PaaS',
				europeanHeadquarters: 'Headquarters in Europe',
				secNumCloud: 'SecNumCloud offering',
				euRegions: 'EU regions',
				costs: 'Cost visibility and control',
			},
			weight: 'weight',
			opinion: "Julien's opinion",
			ratings: { consider: 'Worth considering', possible: 'Possible', unsuitable: 'Less suited' },
			values: { yes: 'Yes', partly: 'Partly', no: 'No' },
			hint: 'Click a bar to see the facts.',
			colon: ':',
			read: 'read on',
			source: 'Source',
			sources: 'Sources',
			outboundTraffic: 'Outbound traffic',
			legend:
				'Les résultats sont des repères pour préparer une décision, pas un classement universel. Les critères et leur importance peuvent varier selon le projet. Les données sont datées et les évaluations de pertinence sont indicatives.',
			footnote:
				'The facts come from the official pages of the providers and of the ANSSI. The weights of each scenario and the "Cost visibility and control" criterion are Julien\'s opinion.',
			verified: 'Faits vérifiés le',
			notes: {
				aws: {
					paas: 'App Runner closed to new customers on 30 April 2026.',
					europeanHeadquarters:
						"Siège à Seattle, États-Unis. En Europe, l'AWS European Sovereign Cloud est disponible depuis janvier 2026, avec une région en Allemagne.",
					secNumCloud: "Not in the ANSSI's SecNumCloud catalogue.",
					euRegions: '6 regions in the EU.',
					costs:
						'Costs by account and by tag, with a forecast. Budgets with alerts and automatic actions.',
				},
				googleCloud: {
					paas: 'Cloud Run deploys from source code or from a Git repository.',
					europeanHeadquarters: 'Headquarters in Mountain View, USA.',
					secNumCloud:
						"Thales's offering, built on Google Cloud technology, qualified since 17 December 2025 in Thales's name.",
					euRegions: '11 regions in the EU.',
					costs:
						'Costs by project and by label, with a forecast. Budgets with alerts and caps that stop some services.',
				},
				infomaniak: {
					containers: 'No serverless containers: Jelastic Cloud scales Docker containers.',
					paas: 'Deploys from Git.',
					europeanHeadquarters: 'Headquarters in Geneva, Switzerland, outside the EU.',
					secNumCloud: "Not in the ANSSI's SecNumCloud catalogue.",
					euRegions: 'No region in the EU: its 2 regions are in Switzerland.',
					costs:
						'No documented cost dashboard, only an API. No budget alerts; resource quotas per project.',
				},
				azure: {
					europeanHeadquarters:
						'Headquarters in Redmond, USA. In Europe, it announces partners: Bleu, in France, and Delos Cloud, in Germany.',
					secNumCloud:
						"Not in the ANSSI's SecNumCloud catalogue. Bleu, a Microsoft partner, is being qualified.",
					euRegions: '13 regions in the EU, 2 of them with restricted access.',
					costs:
						'Costs by subscription, by resource and by tag, with a forecast. Budgets with alerts only.',
				},
				ovhcloud: {
					containers: 'Serverless containers announced as "Coming soon".',
					paas: 'Web PaaS closed on 31 January 2025.',
					europeanHeadquarters: 'Headquarters in Roubaix, France.',
					secNumCloud: '3 qualified IaaS offerings.',
					euRegions: '7 regions in the EU.',
					costs:
						'Usage by project and by resource, with a forecast. Tags not found. An alert on the forecast, with no limit.',
				},
				scaleway: {
					paas: 'Not found. The closest are Serverless Functions.',
					europeanHeadquarters: 'Headquarters in Paris, France.',
					secNumCloud: "Being qualified: not yet in the ANSSI's SecNumCloud catalogue.",
					euRegions: '4 regions in the EU.',
					costs: 'Costs by project and by product. Tags and forecast not found. Alerts only warn.',
				},
			},
			outbound: {
				aws: 'paid beyond 100 GB/month.',
				googleCloud: 'paid from the first GB (Premium Tier).',
				infomaniak: 'included with instances.',
				azure: 'paid beyond 100 GB/month.',
				ovhcloud: 'included with instances.',
				scaleway: 'included with instances.',
			},
		},
	},
	ecology: {
		link: 'Ecology',
		home: {
			title: 'A more efficient cloud also means a more responsible digital footprint.',
			text: "The choice of data centre, the architecture and the quality of the code all affect resource consumption. Compare the options, explore the available data and understand how to reduce unnecessary spending and your application's footprint.",
			link: 'Explore the environmental impact',
		},
		page: {
			title: 'Ecology and infrastructure',
			description:
				'Estimate the energy and emissions of a workload by the country it runs in, with the full calculation, the method, the sources and the limits.',
			heading: 'Infrastructure choices have environmental consequences too.',
			intro:
				'Where the application runs, how long it runs and how efficiently all change the energy it uses and the emissions of the electricity behind it. Here you estimate a workload by the country it runs in, with the method and the sources in plain sight.',
			legend: {
				label: 'How to read the data on this page',
				published: 'a value from a public database or study, with its year and source',
				assumption: 'an assumption of the calculation, which you can change',
				calculated: 'the result of the two above',
			},
		},
		badges: { published: 'Published', assumption: 'Assumption', calculated: 'Calculated' },
		estimator: {
			label: 'Estimate a workload',
			title: 'The same application, in different places.',
			intro:
				"Choose the country, the load and the data centre's efficiency. The calculation follows the open Cloud Carbon Footprint method: processor energy × data centre efficiency × carbon intensity of the electricity.",
			fields: {
				country: 'Country where the infrastructure runs',
				vcpu: 'Virtual processors (vCPU)',
				utilisation: 'Average utilisation',
				hoursPerDay: 'Hours per day',
				pue: 'Data centre efficiency (PUE)',
			},
			hints: {
				utilisation: '50% is the CCF value when the utilisation is unknown',
				pue: '1.52 is the 2026 industry average (Uptime Institute); your provider can give the figure for the data centre you use',
			},
			result: 'Result',
			calculation: 'The calculation',
			comparison: 'The same workload in each country',
			units: {
				vcpu: 'vCPU',
				wattsPerVcpu: 'W per vCPU',
				perDay: 'per day',
				daysPerMonth: 'days per month',
				kwhPerMonth: 'kWh per month',
				kgPerMonth: 'kg CO2e per month',
			},
			wattsSource: 'Cloud Carbon Footprint, unknown processor',
			lifeCycle: 'life cycle',
			locationBased: 'location-based',
		},
		method: {
			label: 'How it is calculated',
			title: 'One method, explained.',
			cards: [
				{
					title: 'Location-based',
					text: 'Uses the yearly average of the electricity generated in the country. It does not count renewable energy contracts: that would be the market-based method, which is not shown here because it needs contract data we do not have.',
				},
				{
					title: 'Life cycle',
					text: "Ember's intensity includes upstream emissions (building the power plants, extracting and transporting the fuel). That is why it is higher than counting only the direct emissions from burning. The two kinds are never mixed on this page.",
				},
				{
					title: 'Processors only',
					text: "The estimator counts the energy of the vCPUs and the data centre's efficiency. Memory, storage, network and server manufacturing are left out, so the real figure is higher.",
				},
			],
		},
		levers: {
			label: 'What infrastructure can change',
			title: 'More efficiency, more visibility.',
			cards: [
				{
					title: 'Matching resources to the load',
					text: "With scalable infrastructure (block 3), resources follow the application's load.",
				},
				{
					title: 'Seeing what is used',
					text: 'Observability (block 4) gives visibility into resource use and costs.',
				},
				{
					title: 'Choosing with information',
					text: 'The carbon intensity of electricity changes from country to country, and the estimator shows by how much.',
				},
				{
					title: 'Lower-impact hosting',
					text: 'When the needs and the budget allow it, it is one of the options I propose.',
				},
			],
		},
		sources: {
			title: 'Sources and limits',
			names: {
				ember: 'Ember, yearly electricity generation by country (carbon intensity, 2025)',
				cloudCarbonFootprint: 'Cloud Carbon Footprint, methodology',
				uptimeInstitute: 'Uptime Institute, industry average PUE (2026 survey)',
				research: "Own research on cloud providers' environmental data (16/10/2026)",
			},
			limits: [
				'An illustrative estimate, not a measurement of your infrastructure.',
				"The watts per vCPU are Cloud Carbon Footprint's for an unknown processor; the real server may use more or less.",
				"The intensity is the country's yearly average; the time of day changes the real figure.",
				'The PUE of 1.52 is the average per data centre; weighted by capacity, it is 1.36. Large data centres, like the cloud ones, tend to have lower values.',
			],
		},
		back: 'Back to the home page',
	},
	sovereignty: {
		link: 'Data sovereignty',
		description:
			'Héberger une application en Europe ne suffit pas à comprendre où circulent les données. La souveraineté se construit par des choix techniques, contractuels et organisationnels.',
		title: 'Tes données sont-elles vraiment sous ton contrôle ?',
		intro:
			'Héberger une application en Europe ne suffit pas, à lui seul, à comprendre où circulent les données ni quels prestataires peuvent y accéder. La souveraineté se construit par des choix techniques, contractuels et organisationnels.',
		sections: [
			{
				title: 'Hébergement européen : une première étape, pas une réponse complète.',
				text: "La localisation des serveurs compte, mais il faut aussi regarder la société qui fournit le service, les sous-traitants, les sauvegardes, la supervision, les accès d'administration et les services externes utilisés par l'application.",
			},
			{
				title: 'Les données ne restent pas forcément là où tourne ton serveur.',
				text: "Un outil d'analyse, un système de logs, un CDN, un service d'authentification, une solution d'e-mail ou une API d'intelligence artificielle peut traiter certaines données hors de ton hébergement principal. Cartographier ces flux permet de détecter les transferts et les dépendances que l'on oublie facilement.",
			},
			{
				title: 'Fournisseur français, européen ou international : quelles différences ?',
				text: "Le bon choix dépend de tes obligations, des fonctionnalités nécessaires et des garanties contractuelles offertes. Un fournisseur européen n'offre pas automatiquement toutes les garanties attendues, et une région européenne d'un fournisseur international ne règle pas à elle seule toutes les questions juridiques.",
			},
			{
				title: 'Réglementation, contrats et protections techniques.',
				text: "RGPD, transferts internationaux, règles de juridiction, chiffrement et contrôle des accès doivent être examinés ensemble. Le CLOUD Act américain peut compter dans l'analyse de certains fournisseurs, mais son existence ne signifie pas que toutes les données hébergées auprès de ces entreprises sont librement accessibles. Les exigences sectorielles, comme SecNumCloud lorsqu'elles s'appliquent, doivent être vérifiées dans les référentiels officiels.",
			},
			{
				title: 'Une architecture adaptée à tes contraintes de souveraineté.',
				text: "Je t'aide à identifier les dépendances techniques, à comparer les options d'hébergement et à intégrer les contraintes de localisation, de sécurité et de réversibilité dans l'architecture. Pour les conclusions juridiques et réglementaires, l'analyse doit être validée par les spécialistes compétents.",
			},
		],
		cta: 'Parlons de la souveraineté de ton infrastructure',
		switzerland: {
			text: "La Suisse ne fait pas partie de l'Union européenne. La Commission européenne reconnaît toutefois qu'elle assure un niveau de protection adéquat des données personnelles : des données personnelles peuvent y être transférées depuis l'UE sans garantie supplémentaire. Cela ne remplace pas le reste de l'analyse : contrat, sous-traitants, accès.",
			sources: {
				euMembers: 'Union européenne, les 27 pays membres',
				notMember: 'Confédération suisse (DFAE), accords bilatéraux',
				adequacy: "Commission européenne, décisions d'adéquation",
				decision: 'Décision 2000/518/CE',
			},
		},
		cloudAct: {
			text: "Le CLOUD Act et le Patriot Act ne sont pas synonymes. Le Patriot Act est une loi antiterroriste américaine de 2001. Le CLOUD Act, adopté en 2018, prévoit qu'un fournisseur soumis au droit américain doit communiquer, sur demande légale des autorités américaines, les données qu'il a en sa possession ou sous son contrôle, qu'elles soient stockées aux États-Unis ou ailleurs. Une entreprise non américaine peut aussi y être soumise si elle a des liens suffisants avec les États-Unis : cela s'apprécie au cas par cas.",
			sources: {
				statute: '18 U.S.C. § 2713 (CLOUD Act)',
				whitePaper: 'Département de la Justice des États-Unis, livre blanc sur le CLOUD Act',
				patriotAct: 'Public Law 107-56 (USA PATRIOT Act)',
			},
		},
		sources: 'Sources',
		table: {
			caption:
				"Ce que disent les sources officielles sur le cloud public standard de quelques fournisseurs, par ordre alphabétique. Ce n'est pas un classement : vérifie chaque point pour ton offre et ton contrat.",
			columns: {
				provider: 'Fournisseur',
				headquarters: 'Pays du siège',
				zones: "Zones d'hébergement",
				contract: 'Juridictions',
				backupsAndLogs: 'Sauvegardes et logs',
				certifications: "Certifications de l'offre",
				references: 'Références officielles',
			},
			colon: ' :',
			notDisclosed: 'non communiqué',
			group: 'Groupe',
			eu: 'UE',
			outsideEu: 'Hors UE',
			elsewhere: "Aussi hors d'Europe",
			laws: {
				CH: 'droit suisse',
				DE: 'droit allemand',
				FR: 'droit français',
				IE: 'droit irlandais',
				LU: 'droit luxembourgeois',
				'US-CA': 'droit de la Californie (États-Unis)',
			},
			contract: 'Contrat',
			parent: 'Société mère',
			backups: 'Sauvegardes',
			logs: 'Logs',
			placements: {
				chosenRegion: 'dans la région choisie (ailleurs seulement si tu le configures)',
				chosenCountry: 'dans le pays choisi',
				inEu: "dans l'UE si l'emplacement choisi y est, parfois sur un autre site",
				otherRegionByDefault: 'par défaut, aussi dans une autre région (modifiable)',
				partlyElsewhere: "une partie peut être hors de l'emplacement choisi",
			},
			read: 'Consultées le',
			references: {
				headquarters: 'Siège',
				zones: 'Zones',
				contract: 'Contrat',
				parent: 'Société mère',
				backups: 'Sauvegardes',
				logs: 'Logs',
				certifications: 'Certifications',
			},
		},
	},
	availability: {
		link: 'Availability & conditions',
		description:
			"Compare les niveaux de disponibilité, calcule ton temps d'indisponibilité théorique et consulte les conditions de la garantie de conformité.",
		heading: 'What level of availability for your SaaS?',
		intro:
			"Un objectif de disponibilité se choisit selon l'impact réel d'une interruption sur ton activité. Plus l'objectif est élevé, plus l'architecture, la redondance et l'exploitation peuvent devenir exigeantes et coûteuses. Compare les niveaux avant de décider.",
		calculator: {
			title: "Calcule ton temps d'indisponibilité théorique",
			text: "Choisis un objectif de disponibilité et découvre ce qu'il représente en minutes par mois et en heures par an. Ces valeurs sont indicatives : un objectif d'architecture ne garantit pas, à lui seul, la disponibilité de toute l'application.",
			objective: 'Objectif de disponibilité',
			month: 'Durée du mois',
			days: 'jours',
			result: 'Indisponibilité maximale théorique',
			perMonth: 'Par mois',
			perYear: 'Équivalent annuel',
			about: 'environ',
			formula:
				'Formule, pour une mesure 24 h/24 : (1 − objectif / 100) × durée de la période en secondes, sur le mois choisi ou sur une année de 365 jours.',
		},
		levels: {
			essential: {
				title: 'Essential availability',
				text: 'Pour une application qui peut tolérer des interruptions occasionnelles. Une infrastructure simple peut suffire selon les dépendances et les risques acceptés.',
			},
			reinforced: {
				title: 'Enhanced availability',
				text: 'Pour réduire les interruptions et mieux sécuriser les services critiques. La supervision et la limitation des points uniques de défaillance deviennent prioritaires.',
			},
			high: {
				title: 'High availability',
				text: 'Pour des services où une interruption prolongée a un impact important. Une redondance adaptée, des mécanismes de bascule et des tests de reprise peuvent être nécessaires.',
			},
			veryHigh: {
				title: 'Very high availability',
				text: "Pour des usages particulièrement sensibles aux interruptions. L'architecture et les procédures d'exploitation doivent être étudiées au cas par cas.",
			},
		},
		architecture: {
			title: "Ce que l'objectif demande à l'architecture",
			intro:
				"Plus l'objectif est élevé, plus l'architecture doit limiter les points uniques de défaillance et se remettre vite d'une panne. Les choix ci-dessous peuvent y contribuer selon le niveau retenu, mais aucune topologie ne garantit, à elle seule, un pourcentage de disponibilité.",
			cards: [
				{
					title: 'Redondance',
					text: "Plusieurs instances de l'application, pour qu'une instance en panne n'arrête pas tout le service. Aux niveaux les moins exigeants, une infrastructure simple peut suffire.",
				},
				{
					title: 'Sauvegardes',
					text: "Des sauvegardes régulières, avec des restaurations testées, quel que soit le niveau. Elles permettent de repartir après un incident, sans empêcher l'interruption.",
				},
				{
					title: 'Base de données',
					text: "Souvent le point unique de défaillance le plus délicat. Quand l'objectif augmente, une réplique prête à prendre le relais peut devenir nécessaire.",
				},
				{
					title: 'Multi-AZ',
					text: "Répartir les ressources sur plusieurs zones de disponibilité d'une même région, pour que la panne d'une zone n'arrête pas tout le service.",
				},
				{
					title: 'Bascule (failover)',
					text: "Des mécanismes qui redirigent le trafic vers une ressource saine, et des tests de reprise pour vérifier qu'ils fonctionnent.",
				},
				{
					title: 'Supervision',
					text: 'Des alertes pour détecter une interruption et réagir vite. Elle devient prioritaire dès 99,9 %.',
				},
			],
		},
		commitment: {
			title: "Un objectif de disponibilité n'est pas une astreinte.",
			text: "Je conçois, configure et vérifie l'infrastructure pour répondre au niveau de disponibilité retenu dans la proposition d'intervention. Le fournisseur cloud reste responsable de ses propres engagements de service. Après livraison, la surveillance quotidienne et la réaction aux incidents relèvent de l'organisation prévue avec ton équipe ou ton prestataire d'exploitation. Une intervention humaine 24 h/24 n'est pas incluse.",
		},
		guarantee: {
			title: 'Trois mois de garantie de conformité technique.',
			text: "Lorsque les quatre blocs sont réalisés dans le cadre d'une prestation complète, les défauts de conception ou de configuration de l'infrastructure qui me sont directement imputables peuvent être signalés pendant les trois mois suivant la livraison. Leur analyse et leur correction sont prises en charge selon le périmètre et les modalités définis au contrat. Cette garantie ne couvre pas automatiquement les bugs applicatifs, les pannes externes ou les modifications non validées.",
		},
		conditions: {
			title: 'Conditions et limites de la garantie de conformité',
			intro:
				"Les conditions contractuelles de la proposition d'intervention font foi. Les principes ci-dessous expliquent le fonctionnement de la garantie et ne remplacent pas le contrat signé.",
			items: [
				{
					title: 'Ce qui est couvert',
					text: "Les défauts de conception, de paramétrage ou de déploiement de l'infrastructure directement liés aux travaux livrés et inclus dans le périmètre contractuel, signalés dans les trois mois suivant la livraison de la prestation complète couvrant les quatre blocs.",
				},
				{
					title: "Ce qui n'est pas couvert",
					text: "Les indisponibilités propres aux fournisseurs cloud ou à des services tiers, sauf lorsqu'elles révèlent une faute de conception ou de configuration relevant de ma prestation ; les bugs et évolutions applicatives hors du périmètre corrigé ; les changements de code, de configuration ou d'infrastructure effectués sans validation et à l'origine du dysfonctionnement ; l'utilisation en dehors des hypothèses de dimensionnement convenues ; le non-respect des prérequis ou recommandations critiques documentés ; les incidents dus à des accès, autorisations ou informations indisponibles du côté client.",
				},
				{
					title: 'Responsabilités',
					text: "Le client conserve la responsabilité de l'exploitation courante, de la validation des changements et de l'organisation de la réponse aux incidents, sauf prestation supplémentaire explicitement prévue. La garantie n'inclut pas d'astreinte 24 h/24, de délai de réaction immédiat ni de compensation financière automatique.",
				},
				{
					title: 'Comment signaler un défaut',
					text: 'Pendant la période couverte, le client transmet une description du problème et les informations utiles au diagnostic. Lorsque la non-conformité entre dans le périmètre de la prestation, les modalités de correction sont convenues en fonction de sa nature et de son impact.',
				},
			],
		},
		button: "Définissons l'objectif de disponibilité adapté à ton projet",
	},
	homePage: {
		description: `${promise} I automate code quality, reduce technical debt and build infrastructure that can keep up with your growth.`,
		hero: {
			support:
				'I automate code quality, reduce technical debt and build infrastructure that can keep up with your growth. Your developers spend less time fixing problems, and more time moving your product forward.',
			note: '45 min on Google Meet. Free, with no commitment.',
		},
		whoItsFor: {
			title: 'Who is it for?',
			intro:
				'Are you building a SaaS or a web application, on your own or with a team? I adapt to your stage of development, your organisation and your technical constraints.',
			situations: [
				'You are preparing a launch and want to start on solid foundations.',
				'Your product is already live, and bugs or maintenance are slowing down new features.',
				'You expect your load to grow and want to avoid unpleasant surprises.',
			],
			button: "Let's talk about your project",
		},
		todayAndAfter: {
			title: 'Today… and after.',
			todayTitle: 'Today',
			today: [
				'A new feature breaks another one, and your customers are the ones who find the regressions.',
				'Your developers spend too much time on bugs, fixes and support.',
				'Outdated code piles up, dependencies age and performance degrades.',
				'Tests and deployments still rely on manual checks.',
				'You lack visibility into the real state of your application and its ability to handle more load.',
			],
			afterTitle: 'After',
			after: [
				'Regressions are caught earlier, thanks to automated checks.',
				'The priority fixes and optimisations make your code easier to maintain.',
				'Part of the repetitive maintenance is automated, to free up development time.',
				'Deployments are more predictable, and the infrastructure adapts to the expected load.',
				'You have metrics and alerts to detect incidents as early as possible.',
			],
		},
		services: {
			label: 'Services',
			title: 'Four levers to make your SaaS reliable and help it grow.',
			intro:
				'From code quality to monitoring in production, I work on the points that slow your team down. After a diagnosis, we define the scope, the priorities and the order of the work together. You can hand me a specific need or a complete project.',
			blockLabel: 'Block',
			toolsLabel: 'Areas and tools',
			blocks: [
				{
					name: 'Code audit & CI/CD',
					summary: 'Catch problems before they reach production.',
					text: 'I analyse the repository and the delivery processes, then set up a pipeline suited to your project: code quality, linting, automated tests, security scanning and dependency checks. Errors are flagged in the pull request, before they become incidents for your customers.',
					tools: [
						'GitHub Actions',
						'GitLab CI',
						'Lint',
						'Unit tests',
						'Integration tests',
						'E2E tests',
						'SonarQube',
						'Trivy',
						'Gitleaks',
					],
					toolsAlternative: 'And more, depending on the stack',
				},
				{
					name: 'Code cleanup & optimisation',
					summary: 'Less technical debt, more time for development.',
					text: 'I take on the application fixes, the refactoring and the performance optimisations identified as priorities myself. I also automate part of the repetitive maintenance. The goal: a cleaner, faster application that is simpler to evolve. The amount of work is set after the audit: it is not an unlimited rewrite of the whole codebase.',
					tools: [
						'Refactoring',
						'Technical debt',
						'Performance',
						'APIs & queries',
						'Dependencies',
						'Automated maintenance',
					],
					toolsAlternative: 'Depending on the stack',
				},
				{
					name: 'Scalable infrastructure',
					summary: 'The right architecture for your use, with no needless complexity.',
					text: 'I containerise the application when it is needed and choose the hosting suited to its load: managed containers, serverless services or Kubernetes. Infrastructure as Code describes, versions and reproduces the environments. The goal is to be able to grow without oversizing the infrastructure from the start.',
					tools: [
						'Docker',
						'Containers as a Service',
						'Kubernetes',
						'Terraform',
						'GCP',
						'AWS',
						'Azure',
						'Scaleway',
						'OVHcloud',
						'Infomaniak',
					],
					toolsAlternative: 'And other providers',
				},
				{
					name: 'Observability',
					summary: 'Stop finding out about incidents from your customers.',
					text: 'I set up the metrics, logs, dashboards and alerts needed to follow the health of the application and its infrastructure. Instead of checking by hand that everything works, your team is warned as soon as a detectable problem appears, and has the information it needs to act.',
					tools: ['Grafana', 'Prometheus', 'Logs', 'Alerts', 'Monitoring', 'Tracing'],
					toolsAlternative: 'Cloud-native tools',
				},
			],
			diagrams: {
				pipeline: {
					description: 'A change with a security flaw is blocked before production.',
					commit: 'commit',
					tests: 'tests',
					security: 'security',
					production: 'production',
					blocked: 'blocked',
				},
				cleanup: {
					description:
						'A bug and duplicated code disappear: the code gets shorter and the response time drops.',
					bug: 'bug',
					duplicate: '×2',
					responseTime: 'response time',
				},
				scaling: {
					description: 'The instances increase with the load, then decrease again.',
					load: 'load',
					instances: 'instances',
				},
				monitoring: {
					description: 'An anomaly in the signal triggers an immediate alert.',
					dashboard: 'health dashboard',
					alert: 'alert',
				},
			},
		},
		steps: {
			title: 'Five steps to move forward with peace of mind.',
			steps: [
				{
					name: 'Initial conversation',
					sentence:
						'45 minutes on Google Meet to understand your product, your priorities and your constraints. Free, with no commitment.',
				},
				{
					name: 'Diagnosis',
					sentence:
						'A free first review of your code and, if needed, of your infrastructure. Feedback within 3 to 5 business days of receiving the access needed.',
				},
				{
					name: 'Intervention proposal',
					sentence: 'A precise scope, priorities, a schedule and a price, agreed before we start.',
				},
				{
					name: 'Implementation',
					sentence:
						'I work alongside your team, keeping disruption to development to a minimum. A regular progress meeting, normally every week, keeps track of the actions and decisions.',
				},
				{
					name: 'Delivery & handover',
					sentence:
						'Documentation, final checks and knowledge transfer, so your team stays self-sufficient.',
				},
			],
		},
		availability: {
			label: 'Availability & reliability',
			title: 'Reliable infrastructure, built to last.',
			text: "Depending on your SaaS's needs, I design and test infrastructure that aims for an availability objective we set together: 99.5%, 99.9%, 99.95% or more when the architecture justifies it. The right level depends on your business, the services used and your budget.",
			guarantee:
				'For a complete intervention covering the four blocks, I offer a three-month technical conformity guarantee after delivery: if a design or configuration defect that comes from my work is found, I take care of fixing it under the conditions agreed in the contract. It is neither round-the-clock on-call support nor a guarantee that the application will never fail.',
			link: 'Understand the availability levels and read the conditions',
		},
		about: {
			title: 'Who is Julien?',
			wayOfWorking:
				'I can work on your project in French, English or Portuguese. I use modern, proven technologies, keep dependence on any one provider as low as possible and document what I deliver, so your team stays self-sufficient. My solutions adapt to your technical and business constraints, not the other way round.',
			linkedin: 'See my LinkedIn profile',
			malt: 'See my Malt profile',
		},
		testimonials: {
			title: 'What clients say',
			carousel: 'carousel',
			slide: 'testimonial',
			of: 'of',
			previous: 'Previous testimonial',
			next: 'Next testimonial',
			strip: 'Testimonials: scroll to see the others',
			translated: 'Translated from French',
			malt: 'View on Malt',
		},
		finalCta: {
			title: 'Your SaaS deserves better than emergency fixes.',
			text: "Already have a project in mind, or just questions about your code, your infrastructure or your next deployment? Let's talk. A first conversation is enough to identify the priorities and see how I can help.",
			button: 'Book a free conversation',
			conversation: '45 minutes on Google Meet. No commitment.',
			bookingNotice:
				'The booking page is in French, but the conversation can be in English or Portuguese.',
		},
	},
	questions: {
		menu: 'Your challenges',
		all: 'See all questions',
		count: { one: 'question', other: 'questions' },
		audiences: {
			general: {
				name: 'General questions',
				short: 'General',
				description: 'For anyone evaluating the service.',
				questions: [
					{
						question: 'Que fais-tu, exactement ?',
						answer:
							"J'interviens sur quatre domaines : audit et CI/CD, nettoyage et optimisation du code, infrastructure scalable et observabilité. L'objectif est de réduire les problèmes récurrents et de permettre à l'application de grandir sur des bases plus solides. Le périmètre de chaque mission est défini après diagnostic.",
					},
					{
						question: 'Combien de temps ça prend ?',
						answer:
							"Cela dépend de l'état du code, des services existants et des travaux prioritaires. Après le diagnostic, je propose un calendrier réaliste, avec des étapes et des livrables précis. Il n'y a pas de promesse artificielle de tout réaliser en 30 jours.",
					},
					{
						question: 'Combien ça coûte ?',
						answer:
							"Le prix est défini à partir du périmètre convenu après un premier diagnostic gratuit. La proposition distingue mes honoraires des éventuels coûts récurrents de cloud et d'outils.",
					},
					{
						question: 'Comment ça commence ?',
						answer:
							"Nous commençons par un échange gratuit de 45 minutes. Viennent ensuite le diagnostic, la proposition d'intervention, la mise en œuvre avec des points d'avancement réguliers, puis la livraison et la passation à ton équipe.",
					},
					{
						question: 'Puis-je choisir seulement certains blocs ?',
						answer:
							"Oui, je peux intervenir sur un besoin ciblé. L'ordre et les dépendances techniques sont déterminés après diagnostic. La garantie de conformité technique de trois mois présentée sur ce site concerne uniquement les prestations complètes couvrant les quatre blocs.",
					},
				],
			},
			cto: {
				name: 'For CTOs',
				short: 'CTO',
				description:
					'Infrastructure, CI/CD, testing, scaling, reliability, observability and working with the team.',
				questions: [
					{
						question: 'Qui écrit les tests ?',
						answer:
							"Je mets en place et j'améliore l'automatisation des contrôles. Lorsque des tests ou des corrections de code sont nécessaires, nous décidons ensemble qui les réalise et dans quel périmètre. Dans le bloc d'optimisation, je peux écrire ou adapter les tests liés aux modifications que je prends en charge.",
					},
					{
						question: "Faut-il arrêter le développement pendant l'intervention ?",
						answer:
							"En principe non. Le travail est organisé avec des branches, des environnements adaptés et des validations progressives. Certaines migrations ou modifications critiques peuvent exiger une fenêtre de changement planifiée avec l'équipe.",
					},
					{
						question: 'Avec quelles stacks et quels clouds travailles-tu ?',
						answer:
							"J'utilise notamment GitHub Actions, GitLab CI, Terraform, Docker, Kubernetes, Grafana et les services natifs des clouds. Je travaille avec AWS, Google Cloud, Azure, Scaleway, OVHcloud et d'autres fournisseurs selon le projet. Les outils sont choisis en fonction du contexte, pas imposés à l'avance.",
					},
					{
						question: 'De quels accès as-tu besoin ?',
						answer:
							"Pour le diagnostic, des accès en lecture au code et, si nécessaire, aux métriques et à la configuration cloud. Pour l'implémentation, des droits adaptés aux opérations convenues. Je privilégie des accès nominatifs, limités au strict nécessaire et révocables à la fin de la mission. Il n'est pas nécessaire de partager des mots de passe ou des clés privées.",
					},
					{
						question: 'Que couvre la garantie de trois mois ?',
						answer:
							"Pour une prestation complète couvrant les quatre blocs, elle concerne les défauts de conception ou de configuration de l'infrastructure qui me sont imputables, selon les conditions contractuelles. L'objectif de disponibilité est défini avec le client. Il ne s'agit ni d'une garantie de zéro bug applicatif, ni d'une astreinte 24 h/24.",
					},
					{
						question: "Quels outils utilises-tu pour l'observabilité ?",
						answer:
							"Selon le contexte, Grafana, Prometheus, des solutions de logs et de tracing, ou les outils de supervision natifs du fournisseur cloud. Le but est de disposer d'indicateurs utiles et d'alertes exploitables, plutôt que de multiplier les dashboards.",
					},
					{
						question: 'Comment travaillons-nous ensemble ?',
						answer:
							"J'échange directement avec les personnes concernées : CTO, tech lead, développeurs et responsable du projet. Nous organisons des points d'avancement réguliers, généralement chaque semaine, et nous documentons les décisions importantes.",
					},
				],
			},
			ceo: {
				name: 'For CEOs',
				short: 'CEO',
				description: 'Risks, costs, continuity, predictability and business impact.',
				questions: [
					{
						question: "Quand connaîtrai-je le budget de l'intervention ?",
						answer:
							'Après le diagnostic gratuit, tu reçois une proposition précisant les travaux, le calendrier et le prix de mon intervention. Les éventuels coûts mensuels des fournisseurs sont présentés séparément.',
					},
					{
						question: 'Combien coûtera le cloud ensuite ?',
						answer:
							"Le coût dépend de l'architecture, du trafic, des données, de la région et du niveau de disponibilité recherché. Je présente une estimation argumentée avant les décisions structurantes, avec les hypothèses et les principaux postes de dépenses.",
					},
					{
						question: 'Mon entreprise va-t-elle dépendre de toi ?',
						answer:
							"Mon objectif est l'inverse : je privilégie des technologies documentées, une infrastructure décrite comme du code et une passation claire. Les dépendances propres au fournisseur choisi sont expliquées dès la conception.",
					},
					{
						question: 'Y a-t-il un risque pour la production ?',
						answer:
							"Toute intervention présente des risques, mais ils sont évalués avant l'exécution. Nous préparons les tests, les sauvegardes et, lorsque c'est pertinent, un plan de retour arrière. Les changements sensibles sont coordonnés avec ton équipe.",
					},
					{
						question: 'Quel retour sur investissement puis-je attendre ?',
						answer:
							'Moins de temps perdu sur les incidents et les tâches répétitives, un code plus maintenable et des déploiements plus fiables. Les gains exacts dépendent de la situation de départ ; le diagnostic sert aussi à identifier les améliorations à plus forte valeur.',
					},
					{
						question: 'Dans quelles langues travailles-tu ?',
						answer:
							"Je peux intervenir en français, en anglais et en portugais, selon les besoins de l'équipe et du projet.",
					},
				],
			},
			team: {
				name: 'For the tech team',
				short: 'Tech team',
				description:
					'Devs and tech leads who will work with the pipeline and the new infrastructure.',
				questions: [
					{
						question: "Qu'est-ce qui change au quotidien ?",
						answer:
							"Des contrôles automatisés plus utiles, moins de tâches manuelles, une meilleure visibilité sur les problèmes et un code progressivement plus simple à maintenir. Les modifications de workflow sont préparées avec l'équipe, pas imposées sans discussion.",
					},
					{
						question: 'Qui maintient les pipelines après ton départ ?',
						answer:
							'Ton équipe conserve les outils, les configurations et la documentation. Je prévois une passation pour que leur fonctionnement soit compris et que les évolutions puissent être réalisées en autonomie.',
					},
					{
						question: 'Avec qui communiques-tu pendant la mission ?',
						answer:
							'Avec les interlocuteurs techniques et métier utiles au projet. Nous prévoyons un point de suivi régulier, normalement hebdomadaire, et des échanges complémentaires lorsque des décisions ou des validations sont nécessaires.',
					},
					{
						question: 'Peut-on continuer à développer pendant les changements ?',
						answer:
							"Oui, l'objectif est de préserver le rythme de développement. Les modifications sont préparées et testées en parallèle lorsque c'est possible. Une fenêtre de stabilisation ou de migration peut être convenue pour les changements sensibles.",
					},
					{
						question: 'Quels outils allons-nous utiliser ?',
						answer:
							"Il n'y a pas de stack imposée. Selon le projet : pipelines CI/CD, analyse de code, outils de refactoring et de performance, Docker, services de conteneurs managés, Kubernetes, Terraform, Grafana, Prometheus ou équivalents. Je privilégie les outils pertinents pour l'équipe et l'existant.",
					},
				],
			},
		},
		page: {
			description:
				"Questions et réponses pour les CEO, les CTO et les développeurs : le code, l'infrastructure, les coûts et notre façon de travailler.",
			title: 'Des réponses concrètes, selon ton rôle.',
			intro:
				"Tu es CEO, CTO, développeur ou tu portes le projet seul ? Retrouve les réponses aux questions les plus fréquentes sur le code, l'infrastructure, les coûts et notre façon de travailler. Et si ta question n'est pas ici, parlons-en.",
			filter: 'Filter by role',
			everyone: 'All',
			search: 'Search the questions',
			searchPlaceholder: 'Search: tests, costs, access…',
			noResults: 'No questions with those words.',
			index: 'Roles',
			notFound: 'Tu ne trouves pas ta réponse ?',
			notFoundText: 'Réserve un échange gratuit et parlons de ton contexte.',
		},
	},
};
