import { useEffect, useState } from "react";

const endpoint: string  = "https://api.github.com/repos/kotob-project/members"
type GitHubMember = {
  login: string;
  id: number;
  node_id: string;

  avatar_url: string;
  gravatar_id: string | null;

  url: string;
  html_url: string;

  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;

  events_url: string;
  received_events_url: string;

  type: "User" | "Bot" | string;
  user_view_type?: string;

  site_admin: boolean;

  // contributors APIのときは付く
  contributions?: number;
};
export const Contributors = () => {
    const [members, setMembers] = useState<Array<GitHubMember>>([]);
    useEffect(() => {
        const fetchContributors = (async () => {
const reposResponse = await fetch(endpoint);
            if (!reposResponse.ok) return alert("Failed to load repositories");
            const members = await reposResponse.json();

            setMembers(members);
        });

        fetchContributors();
    }, []);

    return (
        <div>
            {members.map((member) => (
                <div>{/* ここに良さげなデザインを頼んだ by tanahiro to kyonshi */}</div>
            ))}
        </div>
    );
}