import HeroSection from "@/components/HeroSection";
import SocialLinks from "@/components/SocialLinks";
import CommunityGroups from "@/components/CommunityGroups";
import AboutSection from "@/components/AboutSection";
import TAMeshSection from "@/components/TAMeshSection";
import MapsSection from "@/components/MapsSection";
import BlogSection from "@/components/BlogSection";
// import CommunityPosts from "@/components/CommunityPosts";
import Footer from "@/components/Footer";
import SectionNav from "@/components/SectionNav";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <SectionNav />
      <div id="hero"><HeroSection /></div>
      <div id="community-groups"><SocialLinks /><CommunityGroups /></div>
      <div id="about"><AboutSection /></div>
      <div id="tamesh"><TAMeshSection /></div>
      <div id="maps"><MapsSection /></div>
      <div id="blog"><BlogSection /></div>
      {/* <div id="community-posts"><CommunityPosts /></div> */}
      <Footer />
    </div>
  );
}
