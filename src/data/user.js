const INFO = {
	main: {
		title: "Jacob Autrey Portfolio",
		name: "Jacob Autrey",
		email: "jacobautrey3@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/jacautrey3",
		linkedin: "https://www.linkedin.com/in/jacob-autrey3/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "DevOps Engineer and Certified Kubernetes Administrator",
		description:
			"I am a DevOps engineer with expertise in Kubernetes and Amazon Web Services. I have experience in building scalable, secure and reliable cloud platforms. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "Hello! I'm Jacob Autrey. I live in the San Francisco Bay Area",
		description:
			"Living in the heart of the Silicon Valley has afforded me a front-row seat to the pulse of technological innovation and disruption. As a DevOps engineer immersed in this dynamic ecosystem, I thrive on the relentless energy and spirit of collaboration that permeate this region. From the bustling startup culture to the established tech giants, every day presents an opportunity to contribute to the ever-evolving landscape of digital transformation. Balancing the fast-paced demands of Silicon Valley with the meticulous attention to detail required in DevOps, I find myself continuously inspired by the ingenuity and resilience of the community around me. In this vibrant environment, I am driven to push boundaries, embrace change, and pioneer solutions that shape the future of technology.",
	},

	// articles: {
	// 	title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
	// 	description:
	// 		"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	// },

	projects: [
		{
			title: "Group DJ",
			description:
				"IOS/Android app built with React Native that allow users to create parties and collectively queue songs on a single Spotify account ",

			logo: "./react_icon.png",
			linkText: "View Project",
			link: "https://github.com/jacautrey3/GroupDJ/tree/master",
		},

		{
			title: "Rumate",
			description:
				"IOS/Android app collaboratively designed to improve communication and productivity for roommates by allowing users to delegate and keep track of houshold chores, split bills, and message",
			logo: "./react_icon.png",
			linkText: "View Project",
			link: "https://github.com/ChicoState/RuMate",
		},

		{
			title: "Terraform/Ansible Jenkins Provisioner",
			description:
				"Automates the deployment of a Jenkins server on AWS EC2 instances using Terraform for infrastructure provisioning and Ansible for configuration management.",
			logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg",
			linkText: "View Project",
			link: "https://github.com/jacautrey3/terraform-ansible-jenkins-provisioner",
		},

		{
			title: "Stable Diffusion WebUI",
			description:
				"Provides a user interface for the Stable Diffusion application, which is an AI-powered image creation tool. Created on AWS EC2 instance with Terraform",
			logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg",
			linkText: "View Project",
			link: "https://github.com/jacautrey3/stable-diffusion-aws",
		},
	],

	certificates: [
		{
			title: "Certified Kubernetes Administrator",
			description:
				"The Certified Kubernetes Administrator (CKA) program was created by the Cloud Native Computing Foundation (CNCF), in collaboration with The Linux Foundation, to help develop the Kubernetes ecosystem. As one of the highest velocity open source projects, Kubernetes use is exploding. It is a critical skill for DevOps and IT teams to learn.",
			logo: "./kubernetes-cka-color.svg",
			linkText: "View Certificate",
			link: "https://www.credly.com/badges/ebd109a7-d2b5-4aa1-92dc-b55feec17e1a/linked_in?t=s85tvu",
		},
	],
};

export default INFO;
