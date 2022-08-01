using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class LinkModel
    {
        public string? Link { get; set; }
        public string? Text { get; set; }

        public LinkModel() { }

        public LinkModel(string link)
        {
            Link = Link;
            Text = ParseLinkText(link);
        }

        private string ParseLinkText(string link)
        {
            if (link.Contains("GithubIO"))
            {
                return "GithubIO";
            }
            else if (link.Contains("Github"))
            {
                return "Github";
            }
            else if (link.Contains("YouTube"))
            {
                return "YouTube";
            }
            else if (link.Contains("Steam"))
            {
                return "Steam";
            }
            else if (link.Contains("Download"))
            {
                return "Download";
            }
            else if (link.Contains("Website"))
            {
                return "Website";
            }
            else
            {
                return String.Empty;
            }
        }
    }
}
