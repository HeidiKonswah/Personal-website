
function displayHeader(){
	var pic = HTMLbioPic.replace("%data%", "https://drive.google.com/open?id=1gG2W_rsDju8vVPSPCyHeeIJt4rVkP3UV");
	$("#header").append(pic);
	var name = HTMLheaderName.replace("%data%",headInfo.name);
	$("#header").append(name);
	$("#header").append(HTMLabout.replace("%data%",headInfo.about));
	for(var i = 0; i<headInfo.socials.length; i++){
		$("#socials").append(HTMLiconLink.replace("%link%",headInfo.socials[i].url).replace("%data%",headInfo.socials[i].icon));
	}
	$("#head").append(HTMLbtn.replace("%data%","Download Resume"));
}

function displaySkills(){
	for(var i=0; i<skills.length; i++){
		if(skills[i].icon == ""){continue;}
		else{
		$("#skillsChart").append(HTMLskills.replace("%data%",skills[i].icon));	
		}
		
	}
}

function displayProjects(){
	for(var i=0; i<projects.length; i++){
		$("#projectsList").append(HTMLcard.replace("%img%",projects[i].img).replace("%title%", projects[i].title)
			.replace("%git%",projects[i].git).replace("%check%",projects[i].check).replace("%text%", projects[i].desc));
	}

}

function displayContact(){
	for(var i=0; i<contacts.length; i++){
		$("#contactList").append(HTMLcontact.replace("%icon%", contacts[i].icon).replace("%title%",contacts[i].title + " ").replace("%data%",contacts[i].value));
	}
}



displayHeader();
displaySkills();
displayProjects();
displayContact();
