import { useEffect, useState } from "react";
import "../App.css";
import { useParams, Routes, Router } from "react-router-dom";
// import mammoth from "mammoth";

const RestaurantReviewText = (props) => {
  const [reviewId, setReviewId] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const param = useParams();

  useEffect(() => {
    setReviewId(props);
  }, [props]);

  //   useEffect(() => {
  //     fetch(docs[id])
  //       .then((response) => response.arrayBuffer())
  //       .then((data) => {
  //         // Convert the DOCX content to HTML using mammoth
  //         mammoth
  //           .extractRawText({ arrayBuffer: data })
  //           .then((result) => {
  //             // Split the converted text into individual reviews (assuming one review per line)
  //             const reviewsArray = result.value.split("\n");

  //             // Set the reviews in the component's state
  //             setReview(reviewsArray);
  //           })
  //           .catch((error) => {
  //             console.error("Error converting DOCX to HTML:", error);
  //           });
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching DOCX file:", error);
  //       });
  //   });

  console.log("Passed review id", reviewId);

  switch (reviewId.props?.Id) {
    case 1:
      return <Regional />;
    case 2:
      return <Henrys />;
    case 22:
      return <BambooExpress />;
    case 12:
      return <MountEverestCafe />;
    case 23:
      return <TortillaFactory />;
    case 15:
      return <JimsWings />;
    case 14:
      return <ElPueblito />;
    default:
      return "";
  }
};

export default RestaurantReviewText;

const Regional = () => {
  return (
    <div>
      <p>
        Everything I've had from the Regional has been a culinary work of art, I
        highly recommend their happy hour special of a burger, beer, and a shot
        with a slew of oysters to start. The atmosphere is a nicely lit, cozy,
        rustic environment nestled right next to the train tracks in downtown
        Fort Collins.{" "}
      </p>
      <br />
      <p>
        <strong>Personal Testimony:</strong> My first time at the regional was a
        top tier dining experience. In the middle of the pandemic, I was eager
        to accept the invitation from a friend to try out one of his favorite
        places in Fort Collins. Their happy hour special of a burger, beer, and
        a shot was a warm embrace amid what felt like the end of the world. I
        nervously slurped down my first oyster and my tastebuds were sent on a
        mini vacation to the ocean. We ordered twelve more. The conversation was
        flowing. We began to work our way down through their list of appetizers,
        and split a few more entrees. It was a pricey food excursion but only
        due to our over consumption and eagerness to explore the food variety.
        Their happy hour is incredibly worth it for what you get, and their
        entrées are exquisite. It is one of the best, if not the best, Fort
        Collins has to offer.
      </p>
    </div>
  );
};

const Henrys = () => {
  return (
    <div>
      <p>
        Henry's Pub is an absolute must try if you ever find yourself in
        downtown Loveland. I've explored the menu here not to an extensive
        amount largely due to the chicken fried chicken. Everything I've tried
        has been very good, but I don't think I've had better chicken fried
        chicken. They have a thick house gravy that they pour over four
        generously sized fried chicken pieces, chicken that holds a perfect
        crunch and flavor apart from the gravy. Their menu is impressive and has
        a bevy of delicious options that have never disappointed me, but my
        heart, as long as still beats, belongs to the chicken fried chicken.
      </p>
      <br />
      <p>
        <strong>Personal Testimony:</strong> Earlier in the year, my parents
        came into town for a visit. Without hesitation, I suggested Henry's Pub,
        and to downtown Loveland we drove. If you decide to take a trip to
        Henry's I do recommend making a reservation in advance, as you could
        find your party being pushed onto an hour wait list, like we did. We
        decided to mosey around, and Unbeknownst to me, the Sweetheart Festival
        was taking over the square in downtown Loveland because of Valentine's
        day. There was live music, concessions, games, and it seemed everyone in
        Loveland came out for it. As my parents enjoyed the live music, I made a
        straight line to the tent that served alcohol. I got a craft brewed
        libation and making my way back to my parents, ran into an old friend of
        mine who was there on a date. We exchanged pleasantries before he
        stifled a laugh and asked if I was here by myself. I laughed loudly and
        explained that I was actually here with my parents, we all laughed and
        parted ways. As I stood in the cold alone with my beer, I watched my
        parents enjoy the live music and a thought overtook me, I can't wait to
        order the chicken fried chicken.
      </p>
    </div>
  );
};

const BambooExpress = () => {
  return (
    <div>
      <p>
        The Panda Express killer, Bamboo Express is located in Loveland with a
        similar setup to Panda, but with greater selection, portions,
        affordability, and overall quality. I often find myself splurging when I
        make a trip to Bamboo, with my main entrée consisting of a savory option
        like their hot pepper chicken, a sweet option of honey or sesame
        chicken, and an accompaniment of fried rice or low mein. Additionally, I
        tack on their egg drop soup, crab cheese wontons, and if I’m starved,
        their teriyaki chicken skewers. Rarely do I finish this kind of order in
        one go, and if I do, I find it best to cancel plans and make space for
        an involuntary three-hour nap.{" "}
      </p>
      <br />
      <p>
        <strong>Personal Testimony:</strong> I discovered Bamboo Express several
        years ago when I still lived in Northern Fort Collins. The Chinese joint
        became a weekly to bi-weekly craving, and in the midst of a pandemic, I
        was eager to leave the house for any reason. I can recall a specific
        warm memory, one of my many trips south for a succulent Chinese meal. It
        was a cold night in December, snow began to lightly fall as I traveled
        along a country road to Bamboo Express. I hadn't listened to any
        Christmas music as the holiday neared and a sudden nostalgic impulse led
        me to Kozy 101. The snow fell heavier, simulating a jump to lightspeed.
        The corners of the windshield began to lightly fog as warm air blew
        through the vents, and Bing Crosby sang of dreaming of a white
        Christmas. I pulled into the small parking lot, the blinking neon open
        sign beckoning me inside. I was cheerfully greeted by the server behind
        the counter, I responded in kind and ordered the hot pepper chicken,
        sesame chicken, fried rice, an extra side of coconut shrimp, and a cup
        of egg drop soup. I approached the cash register and glanced around the
        room as the server took my card. In the back corner was a family of four
        with two small children laughing and enjoying their meal. I smiled,
        thanked the server and made my way towards the door. I climbed back into
        my car and removed the lid of my steaming egg drop soup. I don't know if
        I've had a better meal sitting in my warm car on a snowy winter night.
      </p>
    </div>
  );
};

const MountEverestCafe = () => {
  return (
    <div>
      <p>
        One of my first experiences with Indian/Nepalese food came about at Mt.
        Everest Café. The restaurant, located in Fort Collins, offers
        traditional lunch and dinner options as well as their buffet option,
        which I can't recommend enough. One of my favorite lunch options when I
        want to completely stuff myself with a variety of curries, tikka masala,
        and unlimited naan bread.
      </p>
      <br />
      <p>
        <strong>Personal Testimony:</strong> I had just moved to Fort Collins
        and was getting to know all my new roommates, when one of them proposed
        we go to the Nepalese place just a couple blocks from our house. I
        remember being seated at a booth and being given the option to gorge
        ourselves on the contents of their buffet. Excitement pulsed through me.
        Being a young college student with a very uncultured pallet, my senses
        were overwhelmed with the diverse aroma. I felt a sudden excitement and
        peace about trying something new, in a new place, with new people. The
        type of feeling that comes about when you're embarking on a new chapter
        in life, and the future is laden with fulfillment and new experiences. I
        was able to try each entrée offered at least once with my favorites
        being the chicken tikka masala, tandoori chicken, and of course their
        garlic naan. We feasted for well over an hour, and began to laugh loudly
        when our stomachs started processing what our mouths had done to them.
        The rest of the day was spent deflating in the living room, watching
        Pawn Stars on the History Channel.
      </p>
    </div>
  );
};

const TortillaFactory = () => {
  return (
    <div>
      <p>
        Tortilleria La Autentica, or what I've come to better know as the
        tortilla factory, resides in downtown Loveland and is locally owned and
        family operated. They make large quantities of authentic tortillas daily
        that you can purchase packaged in shop, or you can try their breakfast
        burritos, or what I really recommend is the lunch option with its
        burrito variety. The burritos are smaller, and I always order a number
        of them, but they are aptly priced and always delicious. The contents
        include a smearing of beans, rice, one of their entrée options, and the
        choice to add shredded cheese.
      </p>
      <br />
      <p>
        <strong>Personal Testimony:</strong> A friend of mine had been singing
        praises of the tortilla factory for months before I finally made the
        time to travel south to Loveland and try it for myself. I had never
        heard of chicken mole before, and I had to try this sweet Mexican
        concoction. Incidentally, mole comes from the Nahuatl word “molli”
        meaning sauce or concoction. Pretty Neat. Inside, there rang the sounds
        of busy work and the rapid production of fresh tortillas. I looked
        around the small shop to see what other items they offered before
        returning to the main objective. The counters and refrigerators
        occupying the small space were host to a bevy of different Mexican
        snacks, beverages, and candies. I picked out a mandarin Jarritos soda
        and approached the food counter. I chose to try out their burritos and
        ordered one of each, because I am a scientist and needed to conduct
        field research. I took my rather large lunch bag and wandered to a small
        park nearby. The air was still cool, and spring had just begun to take
        hold. I was only able to finish four of the burritos, mind you these are
        much smaller than say a Chipotle burrito, and my favorites were the
        mole, pork green chili, and cheesy chipotle. I returned to my car and
        was pleased to have the night's dinner already taken care of with the
        excess number of burritos I had acquired.{" "}
      </p>
    </div>
  );
};

const JimsWings = () => {
  return (
    <div>
      <p>
        Jim's Wings, located right next to the Colorado State campus, has the
        best wings in Fort Collins in my humble opinion. It is home to a variety
        of flavors and has the best wing size and texture out of all the
        different wing chains littered about northern Colorado. I worked at CSU
        for just over six years, and just before the pandemic hit in 2020 and
        office work was suspended, Jim's Wings became a consistent Friday lunch
        spot, and something to look forward to at the end of the week.{" "}
      </p>
      <br />
      <p>
        <strong>Personal Testimony:</strong> It was a beautiful afternoon in
        May, classes were nearing an end for university students and there was
        an excitement in the air. I was doubly excited because it was Friday,
        and that meant wings. I received the text from my friend that he had
        arrived outside to pick me up for our coveted lunch. I practically
        danced down the stairs and to idling vehicle. We made our way to Jim's,
        laughing and sharing stories of our week's highs and lows. Arriving at
        our destination, we are almost always met with a line to the door, but
        it's Friday and we don't care. My go to order was always twenty wings,
        half yakitori, half hot. The wings are smaller, perfectly crisp, and
        tossed in your selected sauce. We sat at a high-top table and after a
        short wait, our wings arrived, steaming and glistening with a fresh coat
        of wing sauce. A sight that almost brought me to tears. Not a word was
        uttered as we ravenously scarfed down our wings, it was as if we hadn't
        eaten in days. After, we sat back in our chairs, contentment emanating
        from our faces. How was I going to stay awake for the rest of the
        workday.
      </p>
    </div>
  );
};

const ElPueblito = () => {
  return (
    <div>
      <p>
        El Pueblito has two locations, one in Fort Collins and one in Loveland.
        I have only ever been to the Loveland location, so that is who will be
        receiving my praise. I have tried a slew of Mexican restaurants in
        Loveland and this place is still my favorite. I always order the
        California burrito smothered in a spicy green chili cheese sauce. The
        crispy fries, peppers, and tender chicken alone make the burrito
        memorable, but when you smother it in their green chili cheese sauce,
        your tastebuds are being treated to five star all-inclusive Mexican
        resort.
      </p>
      <br />
      <p>
        <strong>Personal Testimony:</strong> It was a cool fall Sunday and the
        NFL was in full swing. The Denver Broncos were once again terrible, but
        this didn't stop me never missing a game. I attended Church like a good
        Christian, and immediately went on my merry western way of concerning
        myself with what lunch option was going to be the best catalyst for a
        torpid afternoon of redzone viewing. With prior knowledge and
        experience, I knew that El Pueblito was the best candidate. They
        recently did a little remodeling, and their interior is warm and
        inviting with a couple of well-placed booths and a small bar. On this
        occasion I was on a mission however, and needed to place an order for
        pickup so I could quickly get home to the comforting voice of Scott
        Hansen and seven hours of commercial free football. I went with my
        favorite dish, the California burrito, as well as an order of their
        super nachos; ground beef, chicken, lettuce, tomato, sour cream, cheese,
        all on a bed of their house made chips. I quickly ate my burrito and
        slightly too many of my super nachos, keeping me walking a fine line
        between comfortably and uncomfortably full. I retired to my couch with
        the desired affect achieved. Letting out a long satisfactory sigh, I
        fixed my eyes on a Broncos scoreboard already heavily favoring the
        opposing team, and my eyelids became heavier and heavier.
      </p>
    </div>
  );
};
