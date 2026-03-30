import { useEffect, useState } from "react";
import ContributorButton from "../components/ContributorButton";

const endpoint: string = "https://api.github.com/orgs/kotob-project/members"
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
            try {
                const members = await reposResponse.json();
                setMembers(members);
            } catch (e) {
                console.error(e);
                alert("Failed to analyse api response data");
            }

        });

        fetchContributors();
    }, []);

    return (
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Contributors</h2>
        <p style={{ color: '#888', marginBottom: '2.5rem' }}>List of those who contributed to development and those who helped.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '6px'}}>
            {members.map((member) => (
                <div key={member.id}>
                    <ContributorButton
                        avatarURL={member.avatar_url}
                        name={member.login}
                        onClick={() => window.open(member.html_url, '_blank')}
                    />
                </div>
            ))}
            </div>
        </div>
    );
}