import Link from 'next/link';
import Image from 'next/image';
import PosterizedImage from '../components/posterized-image';
import CrtFilters from '../components/CrtFilters';

export default function Home() {
  return (
    <div className="relative pt-24 overflow-hidden">
      <CrtFilters />
      {/* Hero section */}
      <section className="min-h-[90vh] flex flex-col justify-center relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Glitch effect heading */}
              <h1 className="radical-heading mb-2 relative overflow-hidden">
                <span className="dark:text-outline text-outline-light sm:text-7xl md:text-9xl tracking-tighter uppercase block mb-2">MAX</span>
              </h1>
              
              <div className="mt-6 md:mt-10 max-w-3xl">
                <p className="radical-subheading text-radical-dark/80 dark:text-radical-light/80">
                  <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">&gt;</span>
                  Engineer. Adventurer. Startup survivor. Global wanderer.
                </p>
                
                <div className="mt-10 md:mt-16 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link 
                    href="/about" 
                    className="radical-border px-8 py-3 font-mono uppercase tracking-wider text-sm bg-radical-primary-light/10 dark:bg-radical-dark text-radical-primary-light dark:text-radical-primary-DEFAULT hover:bg-radical-primary-light/20 dark:hover:bg-radical-primary-DEFAULT/10 transition-colors duration-300"
                  >
                    About me
                  </Link>
                  <Link 
                    href="/blog" 
                    className="px-8 py-3 font-mono uppercase tracking-wider text-sm border border-radical-dark/30 dark:border-radical-light/30 hover:border-radical-primary-light dark:hover:border-radical-primary-DEFAULT hover:bg-radical-primary-light/5 dark:hover:bg-radical-primary-DEFAULT/5 transition-colors duration-300"
                  >
                    Read my blog
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative">
              
              {/* Hero image */}
              <div className="relative z-10 radical-border">
                <PosterizedImage
                  src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_rock_clim_515fa093-24e8-417a-aba9-46dd3d04f23e.png"
                  alt="Rock climbing - seeking adventure"
                  priority={true}
                  className="w-full h-full"
                />
                <div className="absolute -top-3 -right-3 bg-radical-light dark:bg-radical-dark p-2 border border-radical-primary-light/50 dark:border-radical-primary-DEFAULT/50">
                  <span className="font-mono text-xs uppercase text-radical-primary-light dark:text-radical-primary-DEFAULT">Type 2 Fun</span>
                </div>
                {/* Abstract graphic */}
                <div className="absolute -top-10 -right-10 w-40 h-40 border border-radical-secondary-light/50 dark:border-radical-secondary-DEFAULT/50 opacity-30 z-0"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 border border-radical-primary-light/50 dark:border-radical-primary-DEFAULT/50 opacity-30 z-0"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-40 left-1/3 w-5 h-5 bg-radical-primary-light dark:bg-radical-primary-DEFAULT animate-pulse-slow"></div>
        <div className="hidden md:block absolute -bottom-10 right-10 rotate-45 font-mono text-xs tracking-wider text-radical-dark/30 dark:text-radical-light/30 uppercase">
          Scroll down
        </div>
      </section>

      {/* Who I Am section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 radical-dots-light dark:radical-dots opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <h2 className="font-display text-4xl font-bold text-radical-dark dark:text-radical-light">
                  <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">[</span> Who I Am? <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">]</span>
                </h2>
                <div className="h-px w-16 bg-radical-primary-light dark:bg-radical-primary-DEFAULT my-6"></div>
                <p className="font-mono text-sm text-radical-dark/70 dark:text-radical-light/70 max-w-xs">
                  I&apos;ve made a lifetime of questionable decisions so you don&apos;t have to.
                </p>

                <div className="mt-8 hidden md:block">
                  <PosterizedImage
                    src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_taiwan__f9d769f9-055a-4b79-81fd-629aa045a671_1.png"
                    alt="Taiwan building abstract"
                    className="w-full"
                    overlayColor="rgba(247, 101, 163, 0.1)"
                  />
                  <div className="mt-2 font-mono text-xs text-radical-dark/40 dark:text-radical-light/40 uppercase tracking-wider">
                    <span className="text-radical-secondary-light dark:text-radical-secondary-DEFAULT"># </span>
                    These days I&apos;m building structures that last
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 mt-12 md:mt-0">
                <div className="border border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30 p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md mb-6">
                  <p className="font-mono text-sm text-radical-dark/90 dark:text-radical-light/90 mb-4">
                    I&apos;m Max. I founded a startup, sold it, wandered the world, and spent a pandemic living out of a 60-year-old Airstream. Now I help founders dodge my mistakes so they can make original ones.
                  </p>
                  <p className="font-mono text-sm text-radical-dark/90 dark:text-radical-light/90 mb-4">
                    By day, I build things at <a href="https://pitonlabs.com" target="_blank" rel="noopener noreferrer" className="text-radical-primary-light dark:text-radical-primary-DEFAULT hover:underline">Piton Labs</a>, helping startups find their footing. The rest of the time, I&apos;m usually planning the next trip, falling off embarrassingly easy climbs, or getting lost in the woods.
                  </p>
                  <p className="font-mono text-sm text-radical-dark/90 dark:text-radical-light/90">
                    This isn&apos;t a portfolio or a resume — it&apos;s where I put the things I learned the hard way about engineering, adventure, and finding meaning in the journey.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Personal Point 1 */}
                  <div className="border border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30 hover:border-radical-primary-light dark:hover:border-radical-primary-DEFAULT p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md transition-all duration-300 group">
                    <div className="text-radical-primary-light dark:text-radical-primary-DEFAULT text-xl mb-4 font-mono">01</div>
                    <h3 className="font-display text-2xl font-bold text-radical-dark dark:text-radical-light group-hover:text-radical-primary-light dark:group-hover:text-radical-primary-DEFAULT transition-colors duration-300">
                      Startup Veteran
                    </h3>
                    <p className="mt-4 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                      I&apos;ve been the founder, the engineer, the salesperson, and everything in between. I&apos;ve built MVPs, pivoted, and eventually found a path through.
                    </p>
                  </div>
                  
                  {/* Personal Point 2 */}
                  <div className="border border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30 hover:border-radical-primary-light dark:hover:border-radical-primary-DEFAULT p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md transition-all duration-300 group">
                    <div className="text-radical-primary-light dark:text-radical-primary-DEFAULT text-xl mb-4 font-mono">02</div>
                    <h3 className="font-display text-2xl font-bold text-radical-dark dark:text-radical-light group-hover:text-radical-primary-light dark:group-hover:text-radical-primary-DEFAULT transition-colors duration-300">
                      Global Explorer
                    </h3>
                    <p className="mt-4 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                      From trekking in Patagonia to exploring Taiwan, I&apos;m a prolific traveler. I spent a year during COVID living out of a 60-year-old restored Airstream which is now our homebase on our 36 acre homestead in the middle of nowhere eastern Washington.
                    </p>
                  </div>
                  
                  {/* Personal Point 3 */}
                  <div className="border border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30 hover:border-radical-primary-light dark:hover:border-radical-primary-DEFAULT p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md transition-all duration-300 group">
                    <div className="text-radical-primary-light dark:text-radical-primary-DEFAULT text-xl mb-4 font-mono">03</div>
                    <h3 className="font-display text-2xl font-bold text-radical-dark dark:text-radical-light group-hover:text-radical-primary-light dark:group-hover:text-radical-primary-DEFAULT transition-colors duration-300">
                      Weekend Adventurer
                    </h3>
                    <p className="mt-4 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                      An occasionally competent, often terrified trad and sport climber, aspiring ADK 46er, and someone who&apos;s in it more for the views and camaraderie than the adrenaline.
                    </p>
                  </div>
                  
                  {/* Personal Point 4 */}
                  <div className="border border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30 hover:border-radical-primary-light dark:hover:border-radical-primary-DEFAULT p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md transition-all duration-300 group">
                    <div className="text-radical-primary-light dark:text-radical-primary-DEFAULT text-xl mb-4 font-mono">04</div>
                    <h3 className="font-display text-2xl font-bold text-radical-dark dark:text-radical-light group-hover:text-radical-primary-light dark:group-hover:text-radical-primary-DEFAULT transition-colors duration-300">
                      Kitchen Experimenter
                    </h3>
                    <p className="mt-4 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                      When not coding or exploring, I&apos;m likely in the kitchen. Good food, like good code, benefits from both structure and creativity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="col-span-2">
                <PosterizedImage
                  src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_patagon_3472e375-8150-4cbc-851c-e796be66bcec_0.png"
                  alt="Patagonia landscape"
                  priority={true}
                  glitchEffect={true}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-4 h-1/2">
                  <PosterizedImage
                    src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_tblisi__4cf631cc-109f-4399-a1ae-3f1538a6cfd3_0.png"
                    alt="Tbilisi urban abstract"
                    overlayColor="rgba(0, 245, 212, 0.1)"
                    className="w-full h-full"
                  />
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-radical-dark/70 dark:text-radical-light/70 p-4 border-l-2 border-radical-primary-light dark:border-radical-primary-DEFAULT">
                  <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT block mb-2">Suffering is a learned skill.</span>
                  Getting good at being miserable is about remembering you chose this path, knowing when to turn back, and finding people to share the journey.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto space-y-12 px-4 py-12 sm:px-6 lg:space-y-20 lg:px-8 lg:py-20">
          <div className="balatro-crt balatro-flicker">
            <blockquote className="crt-barrel rounded-lg bg-zinc-900 dark:bg-zinc-800 p-8 text-white">
              <div className="font-display text-2xl md:text-3xl lg:text-4xl text-radical-light dark:text-radical-light italic">
                <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">&#8220;</span>
                Climbing is a useless sport. You get to be conquistadors of the useless. You climb to the summit and there is nothing there. And you could hike to the top from another direction. How you get there is the important part.
                <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">&#8221;</span>
              </div>
              <div className="mt-6 inline-flex items-center">
                <div className="h-px w-8 bg-radical-primary-light dark:bg-radical-primary-DEFAULT mr-4"></div>
                <p className="font-mono text-sm text-radical-light/70 dark:text-radical-light/70">Yvon Chouinard</p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative border border-radical-primary-light dark:border-radical-primary-DEFAULT p-12 md:p-16 bg-radical-primary-light/10 dark:bg-radical-dark/80 backdrop-blur-md overflow-hidden">
              {/* Background elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 border-2 border-radical-secondary-light/30 dark:border-radical-secondary-DEFAULT/30 rounded-full"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 border border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2">
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-radical-dark dark:text-radical-light max-w-2xl">
                    Want to chat about <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">code, travel, or building things</span>?
                  </h2>
                  <p className="mt-6 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70 max-w-xl">
                    I&apos;m always up for a conversation about technical challenges, startup ideas, Airstream renovations, or recommendations for trails and treks around the world.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link 
                      href="/about" 
                      className="radical-border inline-flex items-center px-8 py-3 font-mono uppercase tracking-wider text-sm bg-radical-primary-light/10 dark:bg-radical-dark text-radical-primary-light dark:text-radical-primary-DEFAULT hover:bg-radical-primary-light/20 dark:hover:bg-radical-primary-DEFAULT/10 transition-colors duration-300"
                    >
                      More about me
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <Link 
                      href="/blog" 
                      className="inline-flex items-center px-8 py-3 font-mono uppercase tracking-wider text-sm border border-radical-dark/30 dark:border-radical-light/30 hover:border-radical-primary-light dark:hover:border-radical-primary-DEFAULT hover:bg-radical-primary-light/5 dark:hover:bg-radical-primary-DEFAULT/5 transition-colors duration-300"
                    >
                      Read my thoughts
                    </Link>
                  </div>
                </div>
                
                <div>
                  <PosterizedImage
                    src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_vintage_34536eee-ac07-480c-a940-475fa5efcc09_1.png"
                    alt="Vintage tech"
                    glitchEffect={true}
                    overlayColor="rgba(0, 245, 212, 0.1)"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
