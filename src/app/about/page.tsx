import Link from 'next/link';
import PosterizedImage from '../../components/posterized-image';

export default function AboutPage() {
  return (
    <div className="relative pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 radical-grid-light dark:radical-grid opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <header className="py-12 md:py-20 relative">
            <div className="absolute top-0 left-0 w-12 h-12 border border-radical-primary-light/50 dark:border-radical-primary-DEFAULT/50 opacity-50"></div>
            
            {/* Title with glitch effect */}
            <h1 className="radical-heading relative inline-block">
              <span className="text-outline-light dark:text-outline text-6xl sm:text-7xl uppercase tracking-tighter">ABOUT</span>
              <span className="absolute top-1 left-1 text-radical-primary-light dark:text-radical-primary-DEFAULT text-6xl sm:text-7xl uppercase tracking-tighter radical-glitch">ABOUT</span>
            </h1>
            
            <div className="h-px w-24 bg-radical-primary-light dark:bg-radical-primary-DEFAULT my-8"></div>
            
            <p className="radical-subheading text-radical-dark/80 dark:text-radical-light/80 max-w-lg">
              <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">{'// '}</span>
              Founder, engineer, and startup advisor with technical expertise
            </p>
          </header>

          <section className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative z-10">
                  <PosterizedImage
                    src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_abandon_01880443-fc44-4d8f-832a-91fe0d06ad45_0.png"
                    alt="Maxwell Walker - Startup Engineer"
                    className="w-full h-full"
                    priority={true}
                    glitchEffect={true}
                  />
                  <div className="absolute -top-6 -left-6 border border-radical-primary-light dark:border-radical-primary-DEFAULT w-full h-full"></div>
                  <div className="absolute -bottom-6 -right-6 border border-radical-secondary-light dark:border-radical-secondary-DEFAULT w-full h-full"></div>
                </div>
                
                <div className="absolute top-4 right-4 p-3 bg-radical-light dark:bg-radical-dark border border-radical-primary-light dark:border-radical-primary-DEFAULT z-20">
                  <p className="font-mono text-xs uppercase tracking-wider text-radical-primary-light dark:text-radical-primary-DEFAULT">Est. 2018</p>
                </div>
              </div>
              
              <div>
                <h2 className="font-display text-3xl font-bold text-radical-dark dark:text-radical-light mb-6">
                  The <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">Journey</span>
                </h2>
                
                <div className="space-y-6 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                  <p>
                    I&apos;m Maxwell Walker, a startup founder and engineer with a passion for building products that matter. With over a decade of experience in software development and startup ecosystems, I&apos;ve helped numerous companies bring their ideas to life.
                  </p>
                  <p>
                    My approach combines technical expertise with a deep understanding of business needs. I believe that the right technology choices early on can make or break a startup&apos;s chances of success.
                  </p>
                  <p>
                    Having founded Piton Labs, I now work closely with early-stage founders to navigate the technical challenges of building MVPs, scaling infrastructure, and forming technical teams.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link 
                    href="/contact" 
                    className="radical-border px-8 py-3 font-mono uppercase tracking-wider text-sm bg-radical-light dark:bg-radical-dark text-radical-primary-light dark:text-radical-primary-DEFAULT hover:bg-radical-primary-light/10 dark:hover:bg-radical-primary-DEFAULT/10 transition-colors duration-300"
                  >
                    Work with me
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 border-t border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30">
            <h2 className="font-display text-3xl font-bold text-radical-dark dark:text-radical-light mb-12">
              <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">[</span> Expertise <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">]</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="radical-border p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md">
                <div className="uppercase font-mono text-radical-primary-light dark:text-radical-primary-DEFAULT text-sm mb-4 tracking-widest">Technical</div>
                <ul className="space-y-2 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                  <li className="flex items-baseline">
                    <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">⟩</span>
                    Full-stack development
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">⟩</span>
                    Cloud architecture
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">⟩</span>
                    System design
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">⟩</span>
                    DevOps & CI/CD
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">⟩</span>
                    API design
                  </li>
                </ul>
              </div>
              
              <div className="radical-border p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md">
                <div className="uppercase font-mono text-radical-secondary-light dark:text-radical-secondary-DEFAULT text-sm mb-4 tracking-widest">Strategic</div>
                <ul className="space-y-2 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                  <li className="flex items-baseline">
                    <span className="text-radical-secondary-light dark:text-radical-secondary-DEFAULT mr-2">⟩</span>
                    Technology selection
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-radical-secondary-light dark:text-radical-secondary-DEFAULT mr-2">⟩</span>
                    MVP development
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-radical-secondary-light dark:text-radical-secondary-DEFAULT mr-2">⟩</span>
                    Technical roadmapping
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-radical-secondary-light dark:text-radical-secondary-DEFAULT mr-2">⟩</span>
                    Scaling strategy
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-radical-secondary-light dark:text-radical-secondary-DEFAULT mr-2">⟩</span>
                    Team planning
                  </li>
                </ul>
              </div>
              
              <div className="radical-border p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md">
                <div className="uppercase font-mono text-radical-primary-light dark:text-radical-primary-DEFAULT text-sm mb-4 tracking-widest">Advisory</div>
                <ul className="space-y-2 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                  <li className="flex items-baseline">
                    <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">⟩</span>
                    Technical due diligence
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">⟩</span>
                    Code reviews
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">⟩</span>
                    Technical interviewing
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">⟩</span>
                    Architecture assessment
                  </li>
                  <li className="flex items-baseline">
                    <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">⟩</span>
                    Founder coaching
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="py-16 border-t border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-3xl font-bold text-radical-dark dark:text-radical-light mb-6">
                  High-<span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">Impact</span> Engineering
                </h2>
                
                <div className="space-y-6 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                  <p>
                    My philosophy is centered around building high-impact, pragmatic engineering solutions that directly contribute to business goals.
                  </p>
                  <p>
                    I believe in:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-baseline">
                      <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">01.</span>
                      Focusing on business outcomes over technical purity
                    </li>
                    <li className="flex items-baseline">
                      <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">02.</span>
                      Building MVP to validate ideas quickly
                    </li>
                    <li className="flex items-baseline">
                      <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">03.</span>
                      Technology choices that balance speed and scalability
                    </li>
                    <li className="flex items-baseline">
                      <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">04.</span>
                      Engineering teams that understand business needs
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <PosterizedImage
                    src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_tblisi__4cf631cc-109f-4399-a1ae-3f1538a6cfd3_0.png"
                    alt="Urban abstract"
                    className="mb-6"
                  />
                  <PosterizedImage
                    src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_vintage_34536eee-ac07-480c-a940-475fa5efcc09_1.png"
                    alt="Vintage tech"
                    overlayColor="rgba(173, 255, 47, 0.1)"
                  />
                </div>
                <div>
                  <PosterizedImage
                    src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_taiwan__f9d769f9-055a-4b79-81fd-629aa045a671_1.png"
                    alt="Taiwan building abstract"
                    overlayColor="rgba(255, 0, 160, 0.1)"
                    className="mb-6"
                  />
                  <PosterizedImage
                    src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_patagon_3472e375-8150-4cbc-851c-e796be66bcec_0.png"
                    alt="Patagonia landscape"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA section */}
          <section className="py-16 mb-16 border-t border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="space-y-4 mb-8 md:mb-0">
                <h2 className="font-display text-2xl font-bold text-radical-dark dark:text-radical-light">
                  Ready to <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">collaborate</span>?
                </h2>
                <p className="font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                  Let&apos;s discuss how I can help your startup succeed.
                </p>
              </div>
              <Link 
                href="/contact" 
                className="radical-border px-6 py-3 font-mono uppercase tracking-wider text-sm bg-radical-light dark:bg-radical-dark text-radical-primary-light dark:text-radical-primary-DEFAULT hover:bg-radical-primary-light/10 dark:hover:bg-radical-primary-DEFAULT/10 transition-colors duration-300"
              >
                Get in touch
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 