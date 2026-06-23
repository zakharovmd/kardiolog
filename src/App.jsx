import { AddressSection } from './components/AddressSection.jsx';
import { ApproachSection } from './components/ApproachSection.jsx';
import { EducationSection } from './components/EducationSection.jsx';
import { HelpSection } from './components/HelpSection.jsx';
import { Hero } from './components/Hero.jsx';
import { LinksPanel } from './components/LinksPanel.jsx';
import { ReviewSection } from './components/ReviewSection.jsx';

function App() {
  return (
    <main className="page-shell">
      <div className="profile">
        <Hero />
        <LinksPanel />
      </div>

      <div className="content-grid">
        <HelpSection />
        <ApproachSection />
        <EducationSection />
        <ReviewSection />
        <AddressSection />
      </div>
    </main>
  );
}

export default App;
