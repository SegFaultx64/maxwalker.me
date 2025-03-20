import Link from 'next/link';
import Image from 'next/image';
import PosterizedImage from '../components/posterized-image';

export default function Home() {
  return (
    <div className="relative pt-24 overflow-hidden">
      {/* Hero section */}
      <section className="min-h-[90vh] flex flex-col justify-center relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Glitch effect heading */}
              <h1 className="radical-heading mb-2 relative overflow-hidden">
                <span className="dark:text-outline text-outline-light sm:text-7xl md:text-9xl tracking-tighter uppercase block mb-2">STARTUP</span>
                <div className="flex items-start">
                  <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT text-5xl sm:text-6xl md:text-8xl tracking-tighter uppercase radical-glitch">ENGINEERING</span>
                  <span className="ml-1 text-radical-secondary-light dark:text-radical-secondary-DEFAULT text-sm align-top mt-1">&trade;</span>
                </div>
              </h1>
              
              <div className="mt-6 md:mt-10 max-w-3xl">
                <p className="radical-subheading text-radical-dark/80 dark:text-radical-light/80">
                  <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT mr-2">&gt;</span>
                  Building and advising next-generation startups
                </p>
                
                <div className="mt-10 md:mt-16 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link 
                    href="/contact" 
                    className="radical-border px-8 py-3 font-mono uppercase tracking-wider text-sm bg-radical-primary-light/10 dark:bg-radical-dark text-radical-primary-light dark:text-radical-primary-DEFAULT hover:bg-radical-primary-light/20 dark:hover:bg-radical-primary-DEFAULT/10 transition-colors duration-300"
                  >
                    Work with me
                  </Link>
                  <Link 
                    href="/about" 
                    className="px-8 py-3 font-mono uppercase tracking-wider text-sm border border-radical-dark/30 dark:border-radical-light/30 hover:border-radical-primary-light dark:hover:border-radical-primary-DEFAULT hover:bg-radical-primary-light/5 dark:hover:bg-radical-primary-DEFAULT/5 transition-colors duration-300"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative">
              
              {/* Hero image */}
              <div className="relative z-10 radical-border">
                <PosterizedImage
                  src="/images_for_use/u3894594211_edgy_graphic_design_monochrome_posterized_rock_clim_515fa093-24e8-417a-aba9-46dd3d04f23e.png"
                  alt="Rock climbing - pushing boundaries"
                  priority={true}
                  className="w-full h-full"
                />
                <div className="absolute -top-3 -right-3 bg-radical-light dark:bg-radical-dark p-2 border border-radical-primary-light/50 dark:border-radical-primary-DEFAULT/50">
                  <span className="font-mono text-xs uppercase text-radical-primary-light dark:text-radical-primary-DEFAULT">Elevate</span>
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

      {/* Services section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 radical-dots-light dark:radical-dots opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <h2 className="font-display text-4xl font-bold text-radical-dark dark:text-radical-light">
                  <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">[</span> Services <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">]</span>
                </h2>
                <div className="h-px w-16 bg-radical-primary-light dark:bg-radical-primary-DEFAULT my-6"></div>
                <p className="font-mono text-sm text-radical-dark/70 dark:text-radical-light/70 max-w-xs">
                  I help startups thrive with technical expertise and strategic advisory.
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
                    Building structures that last
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 mt-12 md:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Service 1 */}
                <div className="border border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30 hover:border-radical-primary-light dark:hover:border-radical-primary-DEFAULT p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md transition-all duration-300 group">
                  <div className="text-radical-primary-light dark:text-radical-primary-DEFAULT text-xl mb-4 font-mono">01</div>
                  <h3 className="font-display text-2xl font-bold text-radical-dark dark:text-radical-light group-hover:text-radical-primary-light dark:group-hover:text-radical-primary-DEFAULT transition-colors duration-300">
                    MVP Development
                  </h3>
                  <p className="mt-4 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                    Building minimum viable products that validate your idea and attract investors.
                  </p>
                </div>
                
                {/* Service 2 */}
                <div className="border border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30 hover:border-radical-primary-light dark:hover:border-radical-primary-DEFAULT p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md transition-all duration-300 group">
                  <div className="text-radical-primary-light dark:text-radical-primary-DEFAULT text-xl mb-4 font-mono">02</div>
                  <h3 className="font-display text-2xl font-bold text-radical-dark dark:text-radical-light group-hover:text-radical-primary-light dark:group-hover:text-radical-primary-DEFAULT transition-colors duration-300">
                    Tech Strategy
                  </h3>
                  <p className="mt-4 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                    Making the right technology choices to ensure scalability and sustainability.
                  </p>
                </div>
                
                {/* Service 3 */}
                <div className="border border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30 hover:border-radical-primary-light dark:hover:border-radical-primary-DEFAULT p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md transition-all duration-300 group">
                  <div className="text-radical-primary-light dark:text-radical-primary-DEFAULT text-xl mb-4 font-mono">03</div>
                  <h3 className="font-display text-2xl font-bold text-radical-dark dark:text-radical-light group-hover:text-radical-primary-light dark:group-hover:text-radical-primary-DEFAULT transition-colors duration-300">
                    Team Building
                  </h3>
                  <p className="mt-4 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                    Helping you build an engineering team that can execute on your vision.
                  </p>
                </div>
                
                {/* Service 4 */}
                <div className="border border-radical-primary-light/30 dark:border-radical-primary-DEFAULT/30 hover:border-radical-primary-light dark:hover:border-radical-primary-DEFAULT p-6 bg-radical-light/80 dark:bg-radical-dark/80 backdrop-blur-md transition-all duration-300 group">
                  <div className="text-radical-primary-light dark:text-radical-primary-DEFAULT text-xl mb-4 font-mono">04</div>
                  <h3 className="font-display text-2xl font-bold text-radical-dark dark:text-radical-light group-hover:text-radical-primary-light dark:group-hover:text-radical-primary-DEFAULT transition-colors duration-300">
                    Growth Advisory
                  </h3>
                  <p className="mt-4 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">
                    Strategic advice on scaling your product and technology organization.
                  </p>
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
                  <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT block mb-2">VISION</span>
                  Pushing boundaries and exploring new territories requires both technical expertise and adventurous thinking.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="py-32 relative radical-scan">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-radical-dark dark:text-radical-light italic">
              <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">&quot;</span>
              My experience in startups and technical expertise make me the perfect advisor to help founders get their companies off the ground.
              <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">&quot;</span>
            </blockquote>
            <div className="mt-6 inline-flex items-center">
              <div className="h-px w-8 bg-radical-primary-light dark:bg-radical-primary-DEFAULT mr-4"></div>
              <p className="font-mono text-sm text-radical-dark/70 dark:text-radical-light/70">Maxwell Walker, Founder of Piton Labs</p>
            </div>
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
                    Ready to take your startup to the <span className="text-radical-primary-light dark:text-radical-primary-DEFAULT">next level</span>?
                  </h2>
                  <p className="mt-6 font-mono text-sm text-radical-dark/70 dark:text-radical-light/70 max-w-xl">
                    Let&apos;s discuss how I can help you build and scale your technology.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link 
                      href="/contact" 
                      className="radical-border inline-flex items-center px-8 py-3 font-mono uppercase tracking-wider text-sm bg-radical-primary-light/10 dark:bg-radical-dark text-radical-primary-light dark:text-radical-primary-DEFAULT hover:bg-radical-primary-light/20 dark:hover:bg-radical-primary-DEFAULT/10 transition-colors duration-300"
                    >
                      Get in touch
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <Link 
                      href="/blog" 
                      className="inline-flex items-center px-8 py-3 font-mono uppercase tracking-wider text-sm border border-radical-dark/30 dark:border-radical-light/30 hover:border-radical-primary-light dark:hover:border-radical-primary-DEFAULT hover:bg-radical-primary-light/5 dark:hover:bg-radical-primary-DEFAULT/5 transition-colors duration-300"
                    >
                      Read the blog
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
