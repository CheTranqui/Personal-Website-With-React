using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Data.Models;

namespace Data.Services
{
    public class InMemoryProjectData : IProjectData
    {
        public async Task<IEnumerable<ProjectModel>> GetAllProjects()
        {
            var projectsList = new List<ProjectModel>();

            ProjectModel p1 = new ProjectModel();
            p1.Title = "CheSudoku";
            p1.ImageFile = "Sudoku.jpg";
            p1.Description = "My current side-project is creating my own personalized sudoku. It was very challenging to develop a worthwhile algorithm for board generation, but with that now in place I'm iterating on the features to make it an ideal experience.";
            p1.Lesson = "Start new projects with a working MVP, then refine it. The original algorithm for board generation randomly placed numbers from the first square's top row into the second's middle or bottom and continued as such with placing specific numbers in particular locations randomly. It was bulky and no more accurate than this final version. I found this version when I got to square number 5 and had to take all directions of collisions into account. Extrapolating that provided this nicely succinct result.";
            p1.LinkToGithub = new LinkModel() { Link = "https://github.com/CheTranqui/PersonalWebsite/tree/main/JSSudoku" };
            p1.LinkToYouTube = new LinkModel() { Link = "https://youtu.be/oib97gNg6a4" };
            p1.LinkToSteam = null;
            p1.LinkToDownload = null;
            p1.LinkToGithubIO = null;
            p1.LinkToWebsite = new LinkModel() { Link = "JSSudoku/sudoku.html" };
            projectsList.Add(p1);

            ProjectModel p2 = new ProjectModel();
            p2.Title = "Java MVC App";
            p2.ImageFile = "JavaMVC.jpg";
            p2.Description = "The original college assignment was simply to create and display a linked-list of students. It expanded to allow the selection of one or multiple students from the original list into a new one for a specific course. I then refactored it to incorporate explicit GUI and Controller classes.";
            p2.Lesson = "There is a huge difference between a prototype and a finished product. The conversion from a basic, functioning application to an organized MVC application with appropriate comments. Accomplishing this required additional time and energy, but despite its imperfections, the resultant readability is hugely beneficial.";
            p2.LinkToGithub = new LinkModel() { Link = "https://github.com/CheTranqui/Registrar-Java-Swing-LinkedList"};
            p2.LinkToYouTube = new LinkModel() { Link = "https://www.youtube.com/watch?v=N5rHHaRTat8" };
            p2.LinkToSteam = null;
            p2.LinkToDownload = null;
            p2.LinkToGithubIO = null;
            p2.LinkToWebsite = null;
            projectsList.Add(p2);
    
            ProjectModel p3 = new ProjectModel();
            p3.Title = "The Martian Tribune";
            p3.ImageFile = "MartianTribunePreview.jpg";
            p3.Description = "Haemimont Games released Surviving Mars back in 2018. I wanted the colonists to feel more personal, so using what I learned in making my drafting minigame I developed my first ever mod: The Martian Tribune. Every third in-game day ('sol') it dynamically presents stories that my team and I wrote depending upon the current state of the game.";
            p3.Lesson = "As Project Lead I recruited a second author and later brought on a professional programmer to refactor my original LUA code (what is currently on GitHub is her refactoring). This was an awesome experience in just how challenging, rewarding, and diverse the development experience is when seeing a project through from start to finish.";
            p3.LinkToGithub = new LinkModel() { Link = "https://github.com/CheTranqui/Surviving-Mars-Martian-Tribune" };
            p3.LinkToYouTube = new LinkModel() { Link = "https://www.youtube.com/watch?v=QJvOHWFPZ_Y&ab_channel=CheTranqui" };
            p3.LinkToSteam = new LinkModel() {  Link = "https://steamcommunity.com/sharedfiles/filedetails/?id=1376913896"};
            p3.LinkToDownload = null;
            p3.LinkToGithubIO = null;
            p3.LinkToWebsite = null;
            projectsList.Add(p3);

            ProjectModel p4 = new ProjectModel();
            p4.Title = "Estate Management App";
            p4.ImageFile = "EstateMgmtPreview.jpg";
            p4.Description = "In Spring of 2020 my uncle passed away. To assist my father with his estate work I built him a simple website that he could run locally to track his tasks, contacts, goods, and properties. This work forced me to put into practice what I had learned from my informal study via freeCodeCamp.org and a friend's informal mentorship.";
            p4.Lesson = "This was my first real experience with DOM manipulation. It uses Local Storage for persistence and it was exciting to use data from one form ('Contacts') to populate the dropdown of another. It was also interesting to work with my dad as my client: the Print page was a result of his desire to access the information while working at the farm or with the Realtor.";
            p4.LinkToGithub = new LinkModel() { Link = "https://github.com/CheTranqui/Estate-Management" };
            p4.LinkToYouTube = null;
            p4.LinkToSteam = null;
            p4.LinkToDownload = null;
            p4.LinkToGithubIO = new LinkModel() { Link = "https://chetranqui.github.io/Estate-Management"};
            p4.LinkToWebsite = null;
            projectsList.Add(p4);

            ProjectModel p5 = new ProjectModel();
            p5.Title = "JavaScript Practice Page";
            p5.ImageFile = "JavaScriptPreview.jpg";
            p5.Description = "In the Fall of 2019 I decided to test my resolve and see if I enjoy programming enough to make it a career. A friend took me on as his mentee, teaching me the basics of front end development as I worked my way through freeCodeCamp's coursework. This page is the culmination of my initial introduction to JavaScript.";
            p5.Lesson = "I found that I have an aptitude for programming, am able to readily grasp the concepts presented, and that I have the patience and determination to push through the occasional frustration. I enjoy the learning experience and problem solving involved in programming. It is this experience that compelled me to pursue a degree and career in software development.";
            p5.LinkToGithub = null;
            p5.LinkToYouTube = null;
            p5.LinkToSteam = null;
            p5.LinkToDownload = null;
            p5.LinkToGithubIO = null;
            p5.LinkToWebsite = new LinkModel() { Link = "JSHomework/JSHomework.html" };
            projectsList.Add(p5);




            //var str = new StringBuilder();
            //var projects = new JObject();
            //var projectsList = new List<ProjectModel>();
            //try
            //{
            //    using (var sr = new StreamReader("projects.json"))
            //    {
            //        str.Append(sr.ReadToEnd());
            //    }
            //    projects = JObject.Parse(str.ToString());
            //}
            //catch
            //{
            //    // return an empty list on failure
            //    return new List<ProjectModel> { new ProjectModel()};
            //}

            //foreach (var p in projects["Projects"])
            //{
            //    var project = new ProjectModel(
            //        p["title"].ToString(),
            //        p["imageFile"].ToString(),
            //        p["description"].ToString(),
            //        p["lesson"].ToString(),
            //        new string[]
            //        {
            //            p["linkToGithub"].ToString(),
            //            p["linkToYouTube"].ToString(),
            //            p["linkToSteam"].ToString(),
            //            p["linkToDownload"].ToString(),
            //            p["linkToGithubIO"].ToString(),
            //            p["linkToWebsite"].ToString()
            //        });
            //    projectsList.Add(project);
            //}
            return projectsList;
        }
    }
}
