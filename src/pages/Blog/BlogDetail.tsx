import React from 'react';
import { useParams } from 'react-router-dom';
import { AuthorCard, PageHeader } from '@/component/UI/molecules';

import DATA_BLOG from '@/constant/blog';
import { Tag } from '@/component/UI/atoms';

const BlogDetail = () => {
  const { id } = useParams();

  const blogIndex = DATA_BLOG.findIndex((item) => item.id.toString() === id);
  const selectedBlog = DATA_BLOG[blogIndex];

  return (
    <React.Fragment>
      <section className="wrapper my-[101px] mb-[90px]">
        <div className="w-full border-b border-white/10 pb-[89px]">
          <PageHeader
            badge="page"
            title={selectedBlog.title}
            description={`${selectedBlog.date} . ${selectedBlog.estimate}`}
            position="center"
          />
        </div>
      </section>
      <section className="wrapper flex flex-col gap-[70px]">
        <img
          src="/macbook.jpg"
          alt={selectedBlog.title}
          className="w-full rounded-xl"
        />
        <div className="space-y-[30px] w-full max-w-[674px] mx-auto mb-10">
          <p className="text-white text-xl font-medium leading-10">
            Male sixth sea it a. Brought was signs female darkness signs form
            cattle land grass whose from subdue also they`re their brought seas
            isn`t, to day from bearing grass third midst after beginning man
            which you`re. Dry, gathering beginning given made them evening.
          </p>
          <p className="text-white font-medium leading-[34px]">
            Lights dry. Thing, likeness, forth shall replenish upon abundantly
            our green. Seed green sea that lesser divided creature beginning
            land him signs stars give firmament gathered. Wherein there their
            morning a he grass. Don`t made moving for them bring creature us
            you`ll tree second deep good unto good may. Us yielding.
          </p>
          <p className="text-white font-medium leading-[34px]">
            Have. Man upon set multiply moved from under seasons abundantly
            earth brought a. They`re open moved years saw isn`t morning
            darkness. Over, waters, every let wherein great were fifth saw was
            lights very our place won`t and him Third fourth moving him whales
            behold. Beast second stars lights great was don`t green give subdue
            his. Third given made created, they`re forth god replenish have
            whales first can`t light was. Herb you`ll them beast kind divided.
            Were beginning fly air multiply god Yielding sea don`t were forth.
          </p>
        </div>
        <div className="space-y-[30px] w-full max-w-[674px] mx-auto mb-10">
          <h3 className="text-3xl text-white leading-10 font-bold">
            Greater hath rule
          </h3>
          <p className="text-white font-medium leading-[34px]">
            Years fourth gathered yielding rule Creeping seasons moving, so
            image fill morning. Land give light signs divide our seed behold of
            open second for. Doesn`t hath fly. Was. Doesn`t thing brought signs
            living saying.
          </p>
          <img src="/nature.jpg" alt="" className="rounded-xl" />
          <p className="text-white font-medium leading-[34px]">
            Be bring saw grass let dominion. Open beginning in. Him. Is shall
            fifth every won`t, abundantly good they`re can`t midst life first
            multiply void sixth image doesn`t appear had there Second darkness
            herb you`ll make set living above third night us deep, that night
            made fruit waters subdue doesn`t behold one good isn`t darkness
            living. I won`t second creepeth above them sea rule divide fowl
            fill.
          </p>
        </div>
        <div className="space-y-[30px] w-full max-w-[674px] mx-auto">
          <h3 className="text-3xl text-white leading-10 font-bold">
            Seasons likeness void for midst evening
          </h3>
          <p className="text-white font-medium leading-[34px]">
            Darkness us good won`t earth waters yielding which fruit replenish
            set female face good us place fill also fifth life sea blessed
            firmament. A can`t own fourth he every, for give beast be. Rule set
            greater void place, living from, grass. After can`t divide. God had
            called seed was multiply evening said i can`t may a dry.
          </p>
          <ul className="space-y-5 list- pl-10 list-disc text-white">
            <li>Kind night hath called together</li>
            <li>Multiply don`t second stars divided dominion form</li>
            <li>Ttself moved grass give open</li>
            <li>Ttself moved grass give open</li>
          </ul>
          <p className="text-white font-medium leading-[34px]">
            Heaven herb have gathered, male all heaven doesn`t creeping darkness
            she`d moving winged good wherein multiply gathered creature. Bring
            have. Given set multiply sixth seed, midst second, living hath
            without lesser make above.
          </p>
          <div className="w-full max-w-[502px] mx-auto flex flex-col space-y-5 items-center text-center py-5">
            <q className="text-white text-xl leading-10 font-medium">
              God, grant me the serenity to accept the things I cannot change,
              the courage to change the things I can, and the wisdom to know the
              difference.
            </q>
            <span className="text-white text-sm font-medium">
              – Reinhold Niebuhr
            </span>
          </div>
          <p className="text-white font-medium leading-[34px]">
            Of two sixth fill also, let man fruitful he signs earth fifth tree
            won`t in made moved that and can`t and divide evening his man it two
            whales evening called. Their doesn`t grass good waters may don`t
            whose whales.
          </p>
          <div className="flex flex-row gap-5">
            <Tag text="Figma" />
            <Tag text="UI Design" />
            <Tag text="Nature" />
          </div>
        </div>
        <div className="flex justify-center mb-[120px]">
          <AuthorCard user={selectedBlog.author} />
        </div>
      </section>
    </React.Fragment>
  );
};

export default BlogDetail;
