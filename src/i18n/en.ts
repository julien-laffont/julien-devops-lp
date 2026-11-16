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
			title: 'Which cloud should your company choose?',
			description:
				'The best cloud depends on your product, your team, your growth, your budget and your regulatory constraints. Compare the providers according to your priorities.',
			intro:
				'The best cloud depends on your product, your team, your growth, your budget and your regulatory constraints. Compare the options in your own context, rather than choosing a provider on its reputation alone.',
			cta: {
				title: "Can't decide between several architectures?",
				text: "Let's talk about your project and compare the options that fit your constraints.",
			},
		},
		chart: {
			title: 'Compare the providers according to your priorities',
			instruction:
				'Choose a scenario to see the strengths, the limits and the official sources of each provider.',
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
					name: 'Cost control',
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
				'The results are reference points to prepare a decision, not a universal ranking. The criteria and their importance can vary from project to project. The data is dated and the suitability ratings are indicative.',
			footnote:
				'The facts come from the official pages of the providers and of the ANSSI. The weights of each scenario and the "Cost visibility and control" criterion are Julien\'s opinion.',
			verified: 'Facts checked on',
			notes: {
				aws: {
					paas: 'App Runner closed to new customers on 30 April 2026.',
					europeanHeadquarters:
						'Headquarters in Seattle, USA. In Europe, the AWS European Sovereign Cloud has been available since January 2026, with a region in Germany.',
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
			'Hosting an application in Europe is not enough to understand where the data flows. Sovereignty is built through technical, contractual and organisational choices.',
		title: 'Is your data really under your control?',
		intro:
			'Hosting an application in Europe is not, on its own, enough to understand where the data flows or which providers can access it. Sovereignty is built through technical, contractual and organisational choices.',
		sections: [
			{
				title: 'European hosting: a first step, not a complete answer.',
				text: 'Where the servers are matters, but you also need to look at the company that provides the service, its subcontractors, the backups, the monitoring, the administrative access and the external services the application uses.',
			},
			{
				title: 'Data does not necessarily stay where your server runs.',
				text: 'An analytics tool, a logging system, a CDN, an authentication service, an email solution or an artificial intelligence API can process some data outside your main hosting. Mapping these flows helps detect the transfers and dependencies that are easily forgotten.',
			},
			{
				title: 'French, European or international provider: what are the differences?',
				text: 'The right choice depends on your obligations, the features you need and the contractual guarantees offered. A European provider does not automatically offer every guarantee expected, and a European region of an international provider does not, on its own, settle every legal question.',
			},
			{
				title: 'Regulation, contracts and technical protections.',
				text: 'GDPR, international transfers, jurisdiction rules, encryption and access control must be examined together. The US CLOUD Act can matter in the analysis of some providers, but its existence does not mean that all the data hosted with these companies is freely accessible. Sector requirements, such as SecNumCloud where they apply, must be checked against the official frameworks.',
			},
			{
				title: 'An architecture suited to your sovereignty constraints.',
				text: 'I help you identify the technical dependencies, compare the hosting options and build the location, security and reversibility constraints into the architecture. For legal and regulatory conclusions, the analysis must be validated by the relevant specialists.',
			},
		],
		cta: "Let's talk about the sovereignty of your infrastructure",
		switzerland: {
			text: 'Switzerland is not part of the European Union. The European Commission does, however, recognise that it ensures an adequate level of protection for personal data: personal data can be transferred there from the EU without additional safeguards. This does not replace the rest of the analysis: contract, subcontractors, access.',
			sources: {
				euMembers: 'European Union, the 27 member countries',
				notMember: 'Swiss Confederation (FDFA), bilateral agreements',
				adequacy: 'European Commission, adequacy decisions',
				decision: 'Decision 2000/518/EC',
			},
		},
		cloudAct: {
			text: 'The CLOUD Act and the Patriot Act are not the same thing. The Patriot Act is a US anti-terrorism law from 2001. The CLOUD Act, passed in 2018, provides that a provider subject to US law must disclose, on a lawful request from the US authorities, the data in its possession or under its control, whether it is stored in the United States or elsewhere. A non-US company can also be subject to it if it has sufficient ties to the United States: this is assessed case by case.',
			sources: {
				statute: '18 U.S.C. § 2713 (CLOUD Act)',
				whitePaper: 'US Department of Justice, white paper on the CLOUD Act',
				patriotAct: 'Public Law 107-56 (USA PATRIOT Act)',
			},
		},
		sources: 'Sources',
		table: {
			caption:
				'What the official sources say about the standard public cloud of a few providers, in alphabetical order. This is not a ranking: check each point for your offering and your contract.',
			columns: {
				provider: 'Provider',
				headquarters: 'Headquarters country',
				zones: 'Hosting zones',
				contract: 'Jurisdictions',
				backupsAndLogs: 'Backups and logs',
				certifications: 'Certifications of the offering',
				references: 'Official references',
			},
			colon: ':',
			notDisclosed: 'not disclosed',
			group: 'Group',
			eu: 'EU',
			outsideEu: 'Outside the EU',
			elsewhere: 'Also outside Europe',
			laws: {
				CH: 'Swiss law',
				DE: 'German law',
				FR: 'French law',
				IE: 'Irish law',
				LU: 'Luxembourg law',
				'US-CA': 'California law (USA)',
			},
			contract: 'Contract',
			parent: 'Parent company',
			backups: 'Backups',
			logs: 'Logs',
			placements: {
				chosenRegion: 'in the chosen region (elsewhere only if you configure it)',
				chosenCountry: 'in the chosen country',
				inEu: 'in the EU if the chosen location is there, sometimes at another site',
				otherRegionByDefault: 'by default, also in another region (can be changed)',
				partlyElsewhere: 'part of it can be outside the chosen location',
			},
			read: 'Read on',
			references: {
				headquarters: 'Headquarters',
				zones: 'Zones',
				contract: 'Contract',
				parent: 'Parent company',
				backups: 'Backups',
				logs: 'Logs',
				certifications: 'Certifications',
			},
		},
	},
	availability: {
		link: 'Availability & conditions',
		description:
			'Compare the availability levels, calculate your theoretical downtime and read the conditions of the conformity guarantee.',
		heading: 'What level of availability for your SaaS?',
		intro:
			'An availability objective is chosen according to the real impact of an outage on your business. The higher the objective, the more demanding and costly the architecture, the redundancy and the operations can become. Compare the levels before deciding.',
		calculator: {
			title: 'Calculate your theoretical downtime',
			text: 'Choose an availability objective and see what it represents in minutes per month and in hours per year. These values are indicative: an architecture objective does not, on its own, guarantee the availability of the whole application.',
			objective: 'Availability objective',
			month: 'Length of the month',
			days: 'days',
			result: 'Maximum theoretical downtime',
			perMonth: 'Per month',
			perYear: 'Yearly equivalent',
			about: 'about',
			formula:
				'Formula, for round-the-clock measurement: (1 − objective / 100) × length of the period in seconds, over the chosen month or a 365-day year.',
		},
		levels: {
			essential: {
				title: 'Essential availability',
				text: 'For an application that can tolerate occasional outages. Simple infrastructure can be enough, depending on the dependencies and the risks accepted.',
			},
			reinforced: {
				title: 'Enhanced availability',
				text: 'To reduce outages and better protect critical services. Monitoring and limiting single points of failure become priorities.',
			},
			high: {
				title: 'High availability',
				text: 'For services where a prolonged outage has a significant impact. Suitable redundancy, failover mechanisms and recovery tests may be needed.',
			},
			veryHigh: {
				title: 'Very high availability',
				text: 'For uses that are particularly sensitive to outages. The architecture and the operating procedures must be studied case by case.',
			},
		},
		architecture: {
			title: 'What the objective asks of the architecture',
			intro:
				'The higher the objective, the more the architecture must limit single points of failure and recover quickly from a failure. The choices below can contribute to this, depending on the level chosen, but no topology on its own guarantees an availability percentage.',
			cards: [
				{
					title: 'Redundancy',
					text: 'Several instances of the application, so that one failed instance does not stop the whole service. At the less demanding levels, simple infrastructure can be enough.',
				},
				{
					title: 'Backups',
					text: 'Regular backups, with tested restores, whatever the level. They let you start again after an incident, without preventing the outage.',
				},
				{
					title: 'Database',
					text: 'Often the trickiest single point of failure. As the objective rises, a replica ready to take over can become necessary.',
				},
				{
					title: 'Multi-AZ',
					text: 'Spreading the resources over several availability zones of the same region, so that the failure of one zone does not stop the whole service.',
				},
				{
					title: 'Failover',
					text: 'Mechanisms that redirect the traffic to a healthy resource, and recovery tests to check that they work.',
				},
				{
					title: 'Monitoring',
					text: 'Alerts to detect an outage and react quickly. It becomes a priority from 99.9%.',
				},
			],
		},
		commitment: {
			title: 'An availability objective is not an on-call service.',
			text: 'I design, configure and check the infrastructure to meet the availability level chosen in the intervention proposal. The cloud provider remains responsible for its own service commitments. After delivery, day-to-day monitoring and incident response are part of the organisation set up with your team or your operations provider. Round-the-clock human intervention is not included.',
		},
		guarantee: {
			title: 'A three-month technical conformity guarantee.',
			text: 'When the four blocks are carried out as part of a complete engagement, defects in the design or configuration of the infrastructure that are directly attributable to me can be reported during the three months following delivery. Their analysis and correction are handled within the scope and on the terms defined in the contract. This guarantee does not automatically cover application bugs, external outages or unapproved changes.',
		},
		conditions: {
			title: 'Conditions and limits of the conformity guarantee',
			intro:
				'The contractual terms of the intervention proposal prevail. The principles below explain how the guarantee works and do not replace the signed contract.',
			items: [
				{
					title: 'What is covered',
					text: 'Defects in the design, configuration or deployment of the infrastructure directly related to the work delivered and included in the contractual scope, reported within three months of the delivery of the complete engagement covering the four blocks.',
				},
				{
					title: 'What is not covered',
					text: "Outages specific to cloud providers or third-party services, unless they reveal a design or configuration fault within my engagement; application bugs and changes outside the corrected scope; changes to code, configuration or infrastructure made without approval that cause the malfunction; use outside the agreed sizing assumptions; failure to follow the documented critical prerequisites or recommendations; incidents caused by access, permissions or information unavailable on the client's side.",
				},
				{
					title: 'Responsibilities',
					text: 'The client remains responsible for day-to-day operations, for approving changes and for organising the response to incidents, unless an additional service is explicitly provided for. The guarantee does not include round-the-clock on-call support, an immediate response time or automatic financial compensation.',
				},
				{
					title: 'How to report a defect',
					text: 'During the covered period, the client sends a description of the problem and the information useful for the diagnosis. When the non-conformity falls within the scope of the engagement, the terms of the correction are agreed according to its nature and impact.',
				},
			],
		},
		button: "Let's define the right availability objective for your project",
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
						question: 'What exactly do you do?',
						answer:
							'I work in four areas: audit and CI/CD, code cleanup and optimisation, scalable infrastructure and observability. The goal is to reduce recurring problems and let the application grow on more solid foundations. The scope of each engagement is set after the diagnosis.',
					},
					{
						question: 'How long does it take?',
						answer:
							'It depends on the state of the code, the existing services and the priority work. After the diagnosis, I propose a realistic schedule, with precise steps and deliverables. There is no artificial promise to get everything done in 30 days.',
					},
					{
						question: 'How much does it cost?',
						answer:
							'The price is set from the scope agreed after a free first diagnosis. The proposal keeps my fees separate from any recurring cloud and tool costs.',
					},
					{
						question: 'How does it start?',
						answer:
							'We start with a free 45-minute conversation. Then come the diagnosis, the intervention proposal, the implementation with regular progress meetings, and finally the delivery and handover to your team.',
					},
					{
						question: 'Can I choose only some of the blocks?',
						answer:
							'Yes, I can work on a specific need. The order and the technical dependencies are set after the diagnosis. The three-month technical conformity guarantee presented on this site applies only to complete engagements covering the four blocks.',
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
						question: 'Who writes the tests?',
						answer:
							'I set up and improve the automation of the checks. When tests or code fixes are needed, we decide together who does them and within what scope. In the optimisation block, I can write or adapt the tests related to the changes I take on.',
					},
					{
						question: 'Does development have to stop during the intervention?',
						answer:
							'Normally not. The work is organised with branches, suitable environments and gradual approvals. Some migrations or critical changes may need a change window planned with the team.',
					},
					{
						question: 'Which stacks and clouds do you work with?',
						answer:
							"I use GitHub Actions, GitLab CI, Terraform, Docker, Kubernetes, Grafana and the clouds' native services, among others. I work with AWS, Google Cloud, Azure, Scaleway, OVHcloud and other providers, depending on the project. The tools are chosen for the context, not imposed in advance.",
					},
					{
						question: 'What access do you need?',
						answer:
							'For the diagnosis, read access to the code and, if needed, to the metrics and the cloud configuration. For the implementation, permissions suited to the agreed operations. I prefer personal access, limited to what is strictly necessary and revoked at the end of the engagement. There is no need to share passwords or private keys.',
					},
					{
						question: 'What does the three-month guarantee cover?',
						answer:
							'For a complete engagement covering the four blocks, it covers the infrastructure design or configuration defects attributable to me, under the contractual conditions. The availability objective is set with the client. It is neither a guarantee of zero application bugs nor round-the-clock on-call support.',
					},
					{
						question: 'Which tools do you use for observability?',
						answer:
							"Depending on the context, Grafana, Prometheus, logging and tracing solutions, or the cloud provider's native monitoring tools. The aim is to have useful metrics and actionable alerts, rather than piling up dashboards.",
					},
					{
						question: 'How do we work together?',
						answer:
							'I talk directly with the people involved: CTO, tech lead, developers and project owner. We hold regular progress meetings, usually every week, and we document the important decisions.',
					},
				],
			},
			ceo: {
				name: 'For CEOs',
				short: 'CEO',
				description: 'Risks, costs, continuity, predictability and business impact.',
				questions: [
					{
						question: 'When will I know the budget for the intervention?',
						answer:
							'After the free diagnosis, you receive a proposal setting out the work, the schedule and the price of my intervention. Any monthly provider costs are presented separately.',
					},
					{
						question: 'How much will the cloud cost afterwards?',
						answer:
							'The cost depends on the architecture, the traffic, the data, the region and the availability level you aim for. I present a reasoned estimate before the major decisions, with the assumptions and the main cost items.',
					},
					{
						question: 'Will my company depend on you?',
						answer:
							'My goal is the opposite: I favour documented technologies, infrastructure described as code and a clear handover. The dependencies specific to the chosen provider are explained from the design stage.',
					},
					{
						question: 'Is there a risk for production?',
						answer:
							'Every intervention carries risks, but they are assessed before anything is done. We prepare the tests, the backups and, when relevant, a rollback plan. Sensitive changes are coordinated with your team.',
					},
					{
						question: 'What return on investment can I expect?',
						answer:
							'Less time lost on incidents and repetitive tasks, more maintainable code and more reliable deployments. The exact gains depend on the starting point; the diagnosis also serves to identify the improvements with the most value.',
					},
					{
						question: 'Which languages do you work in?',
						answer:
							'I can work in French, English and Portuguese, depending on the needs of the team and the project.',
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
						question: 'What changes day to day?',
						answer:
							'More useful automated checks, fewer manual tasks, better visibility into problems and code that gradually becomes simpler to maintain. Workflow changes are prepared with the team, not imposed without discussion.',
					},
					{
						question: 'Who maintains the pipelines after you leave?',
						answer:
							'Your team keeps the tools, the configurations and the documentation. I plan a handover so that how they work is understood and changes can be made independently.',
					},
					{
						question: 'Who do you communicate with during the engagement?',
						answer:
							'With the technical and business contacts the project needs. We plan a regular follow-up meeting, normally weekly, and extra exchanges when decisions or approvals are needed.',
					},
					{
						question: 'Can we keep developing during the changes?',
						answer:
							'Yes, the goal is to keep the pace of development. Changes are prepared and tested in parallel whenever possible. A stabilisation or migration window can be agreed for sensitive changes.',
					},
					{
						question: 'Which tools will we use?',
						answer:
							'There is no imposed stack. Depending on the project: CI/CD pipelines, code analysis, refactoring and performance tools, Docker, managed container services, Kubernetes, Terraform, Grafana, Prometheus or equivalents. I favour the tools that make sense for the team and for what already exists.',
					},
				],
			},
		},
		page: {
			description:
				'Questions and answers for CEOs, CTOs and developers: the code, the infrastructure, the costs and how we work.',
			title: 'Concrete answers, for your role.',
			intro:
				"Are you a CEO, a CTO, a developer, or carrying the project on your own? Find the answers to the most frequent questions about the code, the infrastructure, the costs and how we work. And if your question is not here, let's talk.",
			filter: 'Filter by role',
			everyone: 'All',
			search: 'Search the questions',
			searchPlaceholder: 'Search: tests, costs, access…',
			noResults: 'No questions with those words.',
			index: 'Roles',
			notFound: "Can't find your answer?",
			notFoundText: "Book a free conversation and let's talk about your context.",
		},
	},
};
