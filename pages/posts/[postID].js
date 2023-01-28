// import React from 'react';
// import Image from 'next/image';
// import Layout from '../../layout/Layout';
// import Author from '../../components/_child/author';
// import Related from '../../components/_child/related';
// import getPost from '../../lib/helper'

// const page = ({ title, img, subtitle, description, author }) => {
//   return (
//     <Layout>
//       <section className="container mx-auto md:px-2 py-16 w-1/2">
//         <div className="flex justify-center">
//           {author ? <Author></Author> : <></>}
//         </div>

//         <div className="post py-10">
//           <h1 className="font-bold text-4xl text-center pb-5">
//             {title || 'No Title'}
//           </h1>

//           <p className="text-gray-500 text-xl text-center">
//             {subtitle || 'No Title'}
//           </p>

//           <div className="py-10">
//             <Image src={img || '/'} width={900} height={600} alt="Image"></Image>
//           </div>

//           <div className="content text-gray-600 text-lg flex flex-col gap-4">
//             {description || 'No Description'}
//           </div>
//         </div>

//         <Related />
//       </section>
//     </Layout>
//   );
// };

// export default page;

// export async function getStaticProps({ params }) {
//   const posts = await getPost(params.postId);

//   return {
//     props: posts,
//   };
// }

// export async function getStaticPaths() {
//   const posts = await getPost();
//   const paths = posts.map((value) => {
//     return {
//       params: {
//         postId: value.id.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

import React from 'react';
import Image from 'next/image';
import Layout from '../../layout/Layout';
import Author from '../../components/_child/author';
import Related from '../../components/_child/related';
import getPost from '../../lib/helper';

export default function Page() {
  return (
    <Layout>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author></Author>
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            Your most unhappy customers are your greatest source of learning
          </h1>

          <p className="text-gray-500 text-xl text-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <div className="py-10">
            <Image
              src={'/images/img1.jpg'}
              width={900}
              height={600}
              alt="Image"
            ></Image>
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar. Lorem ipsum dolor sit amet consectetur
            </p>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar. Lorem ipsum dolor sit amet consectetur
            </p>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar. Lorem ipsum dolor sit amet consectetur
            </p>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar. Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>

        <Related />
      </section>
    </Layout>
  );
}
