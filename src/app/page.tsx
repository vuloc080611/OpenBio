import profile from "@/lib/profile";
import Avatar from "@/components/avatar";
import Bio from "@/components/bio";
import LinkButton from "@/components/link-button";
import SocialIcons from "@/components/social-icons";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="max-w-md w-full mx-auto">
      <Avatar src={profile.avatar} name={profile.name} />
      <Bio text={profile.bio} />

      <div className="flex flex-col gap-3 mt-6">
        {profile.links.map((link, index) => (
          <LinkButton
            key={index}
            title={link.title}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </div>

      <SocialIcons socials={profile.socials} />
      <Footer />
    </div>
  );
}
