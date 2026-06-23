import { AddressSection } from './components/AddressSection';
import { ApproachSection } from './components/ApproachSection';
import { EducationSection } from './components/EducationSection';
import { HelpSection } from './components/HelpSection';
import { Hero } from './components/Hero';
import { LinksPanel } from './components/LinksPanel';
import { ReviewSection } from './components/ReviewSection';

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
