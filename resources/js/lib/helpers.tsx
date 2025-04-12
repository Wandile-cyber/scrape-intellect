// helpers.tsx or helpers.ts

import { Job } from "./interfaces";

export function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
        month: "long",
        day: "numeric",
        year: "numeric",
    };
    const date = new Date(dateString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
        return dateString; // Return original string if date is invalid
    }

    // Format the date and add the appropriate suffix to the day
    const day = date.getDate();
    const suffix = (day: any) => {
        if (day > 3 && day < 21) return "th"; // Special case for 11th, 12th, 13th
        return ["st", "nd", "rd"][(day % 10) - 1] || "th";
    };

    return `${date
        .toLocaleDateString("en-US", options)
        .replace(day.toString(), `${day}${suffix(day)}`)}`;
}

export function getInitials(name: string) {
    return name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}

export function timeAgo(dateString: string): string {
    const now = new Date();
    const date = new Date(dateString);
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return `${interval} years ago`;

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `${interval} months ago`;

    interval = Math.floor(seconds / 86400);
    if (interval > 1) return `${interval} days ago`;

    interval = Math.floor(seconds / 3600);
    if (interval > 1) return `${interval} hours ago`;

    interval = Math.floor(seconds / 60);
    if (interval > 1) return `${interval} minutes ago`;

    return `${seconds} seconds ago`;
}

export function isJobOpen(job: Job) {
    const closingDateTime = new Date(`${job.closing_date}T${job.closing_time}`);
    const currentDateTime = new Date();
    return currentDateTime < closingDateTime;
}

export const previewStyles = `
.job-description-preview {
  font-size: 0.875rem;
  color: var(--muted-foreground);
}

.job-description-preview ul {
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.job-description-preview ol {
  list-style-type: decimal;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.job-description-preview li {
  margin-bottom: 0.25rem;
}

.job-description-preview p {
  margin-bottom: 1rem;
}

.job-description-preview h1,
.job-description-preview h2,
.job-description-preview h3,
.job-description-preview h4 {
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
`;

export const defaultJobDescritpion = `<p>We are seeking a motivated and enthusiastic individual to join our team as a [Job Title]. In this role, you will be responsible for [briefly describe primary responsibilities, e.g., &quot;performing tasks related to project management, customer service, or technical support&quot;]. You will work closely with [mention relevant teams or departments] to ensure [mention key outcomes or goals, e.g., &quot;the successful completion of projects&quot; or &quot;high levels of customer satisfaction&quot;].</p>

<p><strong>Key Responsibilities:</strong></p>

<ul>
	<li>Collaborate with team members to achieve project goals.</li>
	<li>Assist in the development and implementation of [specific processes, systems, or strategies].</li>
	<li>Maintain accurate records and documentation.</li>
	<li>Communicate effectively with clients, colleagues, and stakeholders.</li>
	<li>Participate in team meetings and contribute ideas for improvement.</li>
</ul>

<p><strong>Qualifications:</strong></p>

<ul>
	<li>[Degree or educational requirement, e.g., &quot;Bachelor&rsquo;s degree in a relevant field or equivalent experience.&quot;]</li>
	<li>Strong communication and interpersonal skills.</li>
	<li>Ability to work independently and as part of a team.</li>
	<li>Proficiency in [relevant software or tools, if applicable].</li>
	<li>[Any specific skills or experience relevant to the role, e.g., &quot;previous experience in a similar role is a plus.&quot;]</li>
</ul>

<p><strong>What We Offer:</strong></p>

<ul>
	<li>Competitive salary and benefits package.</li>
	<li>Opportunities for professional development and career advancement.</li>
	<li>A dynamic and supportive work environment.</li>
</ul>

<p>If you are passionate about [industry or field] and eager to contribute to a growing team, we encourage you to apply!</p>
`;
