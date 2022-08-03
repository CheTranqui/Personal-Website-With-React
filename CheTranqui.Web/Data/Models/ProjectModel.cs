using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class ProjectModel
    {
        public string Title { get; set; }
        public string ImageFile { get; set; }
        public string Description { get; set; }
        public string Lesson { get; set; }
        public LinkModel? LinkToGithub { get; set; }
        public LinkModel? LinkToYouTube { get; set; }
        public LinkModel? LinkToSteam { get; set; }
        public LinkModel? LinkToDownload { get; set; }
        public LinkModel? LinkToGithubIO { get; set; }
        public LinkModel? LinkToWebsite { get; set; }

        public ProjectModel()
        {
            Title = "";
            ImageFile = "";
            Description = "";
            Lesson = "";
        }

        public ProjectModel(string Title, string ImageFile, string Description, string Lesson, string[] links)
        {
            this.Title = Title;
            this.ImageFile = ImageFile;
            this.Description = Description;
            this.Lesson = Lesson;
            ParseLinks(links);
        }

        private void ParseLinks(string[] linkInfo)
        {
            foreach (var info in linkInfo)
            {
                var link = new LinkModel(info);
                switch (link.Text)
                {
                    case "GithubIO":
                        LinkToGithubIO = link;
                        break;
                    case "Github":
                        LinkToGithub = link;
                        break;
                    case "YouTube":
                        LinkToYouTube = link;
                        break;
                    case "Steam":
                        LinkToSteam = link;
                        break;
                    case "Download":
                        LinkToSteam = link;
                        break;
                    case "Website":
                        LinkToWebsite = link;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
