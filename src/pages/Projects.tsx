import { motion } from 'motion/react';

export default function Projects() {
  const projects = [
    {
      title: 'Proyecto Residencial',
      category: 'Remodelación Integral',
      image: 'https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/660354705_1603008665164229_5652204895031427198_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG1uYAHiBCgZi6huazUdblQubXZB_xskba5tdkH_GyRtiJfwIdPNDtWIzLDaixEXuXWLRfZ2taQ6gx0sTJeFOxD&_nc_ohc=Kc77Lzt5h0kQ7kNvwH7vhV7&_nc_oc=AdriycSh0QnCVrn6l9LVWJHk7Di7UWwRlWHGiPTZicFExk9fhr_6zuTUHXnAJpFHOx4&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=ixcJFdesa_MPHTV--QZlLg&_nc_ss=7a3a8&oh=00_Af0UnWTOJ382h9ay0N9lI4ipTannpY-jI_SBDEAxRqoflg&oe=69D99C85',
      size: 'large'
    },
    {
      title: 'Diseño de Interiores',
      category: 'Acabados',
      image: 'https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/616141326_1526924376105992_7008225487791346100_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEr9VMLxXvFV67Q1ji1M-gBSq-mAg3fxvVKr6YCDd_G9dG4RXY_nijx_YpLxRIKxvAN1TRFpd6KhjihzMS9H_fV&_nc_ohc=z8VEZeFemHEQ7kNvwFcRzby&_nc_oc=AdowMZ_C8_gVTJmcBQ4DEFVqb0veoLe63_QNp0q0H-l9xh-cA4SnlKZdN5BWHWi6488&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=Zuy-zyC46tUbLMnl5Zphcw&_nc_ss=7a3a8&oh=00_Af0uJ5fK5u4lL6hGxrLpp53x4e_WHCQsjbXVYlQ_0cMr7w&oe=69D9CC55',
      size: 'small'
    },
    {
      title: 'Renovación de Espacios',
      category: 'Remodelación',
      image: 'https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/616013570_1526789619452801_2950389719634232837_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGBc5uvE4yA7MDqUuRKoMZ9BIALMvvlCgwEgAsy--UKDJ31eMzTaOkskgJMgVVfEWoUrkldHMtlklDcgCxD6stV&_nc_ohc=rW4u38QYYsYQ7kNvwGg1grn&_nc_oc=AdoVhGoDiACn9OpaG1asBSxfDZC0QJIvF3zhZB84oDvWa4AvyMuk5amC8YKdaeLxbMI&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=tdaYFQPCob_coGBPTXTJ1w&_nc_ss=7a3a8&oh=00_Af1HkwOomtjc1jbCdrTPT5ejryWv4fNgBp4SY4Ri_gUMgw&oe=69D9B116',
      size: 'small'
    },
    {
      title: 'Restauración Comercial',
      category: 'Exteriores',
      image: 'https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/617509937_1526789616119468_1128481112952880200_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGEZ7gXd09QyJiLdGYJtGs_tSpHZGVLybG1KkdkZUvJsSfiHaujo3HBDhX2INdEM9KCcSEAdKSaHmUPjbwE8gv7&_nc_ohc=E73cP2aJDc4Q7kNvwFokB4C&_nc_oc=AdoGQkWjIQFNgy-bPxZuC_xiBwutVX5G0Wr8q6gV14vcv-PcQisTvoWgchMAHMMO8gE&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=aaU62e7DhenZ0VHqL-jntQ&_nc_ss=7a3a8&oh=00_Af2bODSYSvB6QDT9n6fOOZeoQ4_mRsKhFKk9u64qUAOTLg&oe=69D9961F',
      size: 'large'
    },
    {
      title: 'Adaptación Estructural',
      category: 'Construcción',
      image: 'https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/607735182_1513870440744719_1531970846754899590_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGXkON_5eV7-kU4dsDfW6_UehsvvGOAvAR6Gy-8Y4C8BBnWB6MOd-xKqDXIw9D6uQL4d3DTL5fo38cDEyRDBMF3&_nc_ohc=VROQ--M5m4IQ7kNvwGhjzA-&_nc_oc=AdpiO2V6lyU7vunaa_BPyuikmLSyEL7TG1QDNnfxz19NjbQq0ZgX4VUHfhMkoFSAq68&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=U-8c8JTFCU_IBlc-_FCNBw&_nc_ss=7a3a8&oh=00_Af1B9WHEUL4j1rZDZS1ugFPqfvTRal-ZpgVNKVuKh17GUA&oe=69D9B6B9',
      size: 'large'
    },
    {
      title: 'Detalles y Acabados',
      category: 'Diseño',
      image: 'https://scontent.fdac3-1.fna.fbcdn.net/v/t51.82787-15/581523872_18388351690182360_5665872166029240338_n.webp?stp=dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH1QQoXmhSulBqq47Bb_wMZ_6hDG3kqVaH_qEMbeSpVoW2Gf_Eg-yG2FMItiglotqdBRZ4OnvDrt2deRFUQqBoP&_nc_ohc=kgwXsuwIyaYQ7kNvwEsmqCC&_nc_oc=AdoOOSmVl3S243gw-C34kghmpy6b_BANSlTGAvCfsV2h7H0uxv9KcZqs-v9p6M_wl-w&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=ljJd7WwQjBpDeNiisPWPwA&_nc_ss=7a3a8&oh=00_Af0FmJ4fsHYY83uOZ9BdLwRjmhIFg5fAr7Jk_Ae0VqkR-Q&oe=69D9AD92',
      size: 'small'
    },
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24 md:pb-32">
      {/* Page Header */}
      <div className="pt-24 md:pt-32 pb-16 md:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-[#D49800] font-sans font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-6">
              Portafolio
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-[#0a0a0a] leading-tight mb-8 text-balance">
              Obras <span className="font-medium">Selectas.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto text-balance">
              Una colección de nuestros proyectos más representativos, donde el diseño se encuentra con la ejecución perfecta.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid - Asymmetric */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className={`group cursor-pointer ${
                project.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'
              }`}
            >
              <div className="overflow-hidden mb-6 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ${
                    project.size === 'large' ? 'h-[400px] md:h-[600px]' : 'h-[400px]'
                  }`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-medium text-[#0a0a0a] mb-2 group-hover:text-[#D49800] transition-colors duration-300 text-balance">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm tracking-widest text-gray-500 uppercase">
                    {project.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
