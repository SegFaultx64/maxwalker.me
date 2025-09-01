import Link from 'next/link';
import PosterizedImage from '../../components/posterized-image';
import GlobeDemo from '../../components/GlobeDemo';
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
              Engineer. Adventurer. Airstream renovator.
            </p>
          </header>

          <GlobeDemo />

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
                  <p className="font-mono text-xs uppercase tracking-wider text-radical-primary-light dark:text-radical-primary-DEFAULT">The Journey</p>
                </div>
              </div>
              
              <div>
                <h2 className="font-display text-3xl font-bold text-radical-dark dark:text-radical-light mb-6">
                  The <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">Story</span> So Far
                </h2>
                
                <div className="space-y-6 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                  <p>
                    I founded a startup, sold it, wandered the world, and spent a pandemic living out of a 60-year-old Airstream. Now I help other founders dodge my mistakes so they can make original ones.
                  </p>
                  <p>
                    By day, I build things at <a href="https://pitonlabs.com" target="_blank" rel="noopener noreferrer" className="text-radical-primary-light dark:text-radical-primary-DEFAULT hover:underline">Piton Labs</a>, helping startups find their footing. The rest of the time, I'm usually planning the next trip, falling off embarrassingly easy climbs, or getting lost in the woods.
                  </p>
                  <p>
                    This isn't a portfolio or a resume — it's where I put the things I learned the hard way about engineering, adventure, and finding meaning in the journey.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link 
                    href="/blog" 
                    className="radical-border px-8 py-3 font-mono uppercase tracking-wider text-sm bg-radical-light dark:bg-radical-dark text-radical-primary-light dark:text-radical-primary-DEFAULT hover:bg-radical-primary-light/10 dark:hover:bg-radical-primary-DEFAULT/10 transition-colors duration-300"
                  >
                    Read my blog
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 border-t border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30">
            <h2 className="font-display text-3xl font-bold text-radical-dark dark:text-radical-light mb-12">
              <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">[</span> Airstream <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">]</span> Adventures
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="radical-border p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md">
                <div className="uppercase font-mono text-radical-primary-light dark:text-radical-primary-DEFAULT text-sm mb-4 tracking-widest">The Restoration</div>
                <div className="space-y-4 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                  <p>
                    At the start of COVID, we bought a ruined 1963 Airstream Overlander—just a frame and shell after decades of neglect in an Iowa field. I bought an ebook about DIY restoration, but got as far as "lift the shell with a gantry" before realizing I might accidentally kill myself.
                  </p>
                  <p>
                    We found amazing craftspeople in Ohio who did most of the work while we FaceTimed and exchanged images throughout lockdown. When it was ready, we picked it up having never towed anything before in our lives.
                  </p>
                </div>
              </div>
              
              <div className="radical-border p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md">
                <div className="uppercase font-mono text-radical-secondary-light dark:text-radical-secondary-DEFAULT text-sm mb-4 tracking-widest">The Grand Tour</div>
                <div className="space-y-4 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                  <p>
                    We set out on an absurdly ambitious first trip with zero experience—all the way to Wyoming and Colorado. We dragged it up forest roads in the Tetons (freaking out the rangers), and narrowly escaped both wildfires and unexpected snow in Estes Park before racing back east.
                  </p>
                  <p>
                    The next spring, we embarked on an even bigger journey: 38 states, 5 Canadian provinces, with our surprisingly adaptable cat in tow. We crossed Canada the day the border reopened, fell in love with Chelan County, WA, and ended up buying acres of wild land nearby.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 border-t border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-3xl font-bold text-radical-dark dark:text-radical-light mb-6">
                  <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">Engineering</span> Philosophy
                </h2>
                
                <div className="space-y-6 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                  <p>
                    Pragmatism above all, but that means doing what's reasonable, not just what's fastest or easiest. Everything in tech is a set of tradeoffs—the art is in picking the right ones.
                  </p>
                  <p>
                    A few principles I live by:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-baseline">
                      <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">01.</span>
                      Most startup code will be thrown away. Plan accordingly.
                    </li>
                    <li className="flex items-baseline">
                      <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">02.</span>
                      Code quality matters, but code is just a tool—business impact is the goal.
                    </li>
                    <li className="flex items-baseline">
                      <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">03.</span>
                      Know when to push through challenges, but also when to turn back.
                    </li>
                    <li className="flex items-baseline">
                      <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">04.</span>
                      Remember you chose this path when things get tough.
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10">
                  <PosterizedImage
                    src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_trekkin_006d7bac-0620-40e0-9c6f-d466c44f1f4d_2.png"
                    alt="Trekking adventures"
                    className="w-full h-full"
                    glitchEffect={true}
                    overlayColor="rgba(0, 245, 212, 0.1)"
                  />
                  <div className="absolute -top-4 -right-4 border border-radical-primary-light dark:border-radical-primary-DEFAULT w-full h-full"></div>
                </div>
                <div className="mt-2 font-mono text-xs text-radical-dark/40 dark:text-radical-light/40 uppercase tracking-wider">
                  <span className="text-radical-secondary-light dark:text-radical-secondary-DEFAULT"># </span>
                  What I've learned from mountains applies to startups
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 border-t border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30">
            <h2 className="font-display text-3xl font-bold text-radical-dark dark:text-radical-light mb-12">
              <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">[</span> Lessons From The Trail <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">]</span>
            </h2>
            
            <div className="radical-border p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md mb-8">
              <div className="space-y-4 font-mono text-sm text-radical-dark/90 dark:text-radical-light/90">
                <p>
                  "There are going to be times when you are not having fun, a lot of them. It's important to remember as a founder that you chose to be here and that often the things that suck in the moment will fade away but the other pieces will stay."
                </p>
              </div>
            </div>
          
            <div className="radical-border p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md">
              <div className="space-y-4 font-mono text-sm text-radical-dark/90 dark:text-radical-light/90">
                <p>
                  "It's very important to understand when to turn back. You can turn a slight mess into a life-threatening disaster in the mountains by pushing forward when you should have called it. The same is basically true with startups—there are times to cut and run, and you're only making it worse if you double down in these moments."
                </p>
              </div>
            </div>
          </section>
          
          {/* CTA section */}
          <section className="py-16 mb-16 border-t border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30">
            <div className="relative border border-radical-primary-light dark:border-radical-primary-DEFAULT p-8 md:p-12 bg-radical-primary-light/10 dark:bg-radical-dark/80 backdrop-blur-md overflow-hidden">
              {/* Background elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 border-2 border-radical-secondary-light/30 dark:border-radical-secondary-DEFAULT/30 rounded-full"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 border border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="space-y-4 mb-8 md:mb-0">
                  <h2 className="font-display text-2xl font-bold text-radical-dark dark:text-radical-light">
                    Want to talk <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">Airstreams</span> or code?
                  </h2>
                  <p className="font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                    I'm always up for a conversation about technical challenges, startup ideas, or wherever the next adventure might lead.
                  </p>
                </div>
                <Link 
                  href="/blog" 
                  className="radical-border inline-flex items-center px-8 py-3 font-mono uppercase tracking-wider text-sm bg-radical-light dark:bg-radical-dark text-radical-primary-light dark:text-radical-primary-DEFAULT hover:bg-radical-primary-light/10 dark:hover:bg-radical-primary-DEFAULT/10 transition-colors duration-300"
                >
                  Read my blog
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 