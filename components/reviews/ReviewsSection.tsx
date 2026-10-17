// components/reviews/ReviewsSection.tsx

// 'use client';

// import { services } from '@/lib/data';
// import { useState, FormEvent } from 'react';
// import { INITIAL_REVIEWS, Review } from '@/data/reviews';

// export function ReviewsSection() {
//   const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
//   const [showModal, setShowModal] = useState(false);
//   const [newReview, setNewReview] = useState({
//     clientName: '',
//     roleOrOrganization: '',
//     rating: 5,
//     serviceProvided: 'Web Design & Development',
//     comment: '',
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleReviewSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     const created: Review = {
//       id: `review-${Date.now()}`,
//       clientName: newReview.clientName,
//       roleOrOrganization: newReview.roleOrOrganization || 'Client',
//       rating: Number(newReview.rating),
//       comment: newReview.comment,
//       serviceProvided: newReview.serviceProvided,
//       verified: false,
//       date: new Date().toISOString().split('T')[0],
//     };

//     setReviews([created, ...reviews]);
//     setSubmitted(true);
//     setTimeout(() => {
//       setShowModal(false);
//       setSubmitted(false);
//       setNewReview({
//         clientName: '',
//         roleOrOrganization: '',
//         rating: 5,
//         serviceProvided: 'Web Design & Development',
//         comment: '',
//       });
//     }, 2000);
//   };

//   const aggregateRating = (
//     reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
//   ).toFixed(1);

//   // JSON-LD Aggregate Rating Schema for AI & Google Rich Snippets
//   const reviewSchema = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "Hiloster Technologies",
//     aggregateRating: {
//       "@type": "AggregateRating",
//       ratingValue: aggregateRating,
//       reviewCount: reviews.length,
//       bestRating: "5",
//       worstRating: "1",
//     },
//     review: reviews.map((r) => ({
//       "@type": "Review",
//       author: { "@type": "Person", name: r.clientName },
//       datePublished: r.date,
//       reviewBody: r.comment,
//       reviewRating: {
//         "@type": "Rating",
//         ratingValue: r.rating.toString(),
//         bestRating: "5",
//       },
//     })),
//   };

//   return (
//     <section className="py-12 transition-colors duration-300">
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
//       />

//       <div className="space-y-10">
        
//         {/* Header & Overall Rating Score */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
//           <div className="space-y-2 text-center md:text-left">
//             <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/80 text-amber-700 dark:text-amber-400 text-xs font-bold">
//               <span>★ VERIFIED CLIENT FEEDBACK</span>
//             </div>
//             <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
//               Client Reviews & Ratings
//             </h2>
//             <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
//               Read verified testimonials from educational institutions, clinics, and businesses across Kenya.
//             </p>
//           </div>

//           <div className="flex flex-col items-center sm:items-end gap-3 flex-shrink-0">
//             <div className="flex items-center space-x-3">
//               <span className="text-4xl font-black text-slate-900 dark:text-white">{aggregateRating}</span>
//               <div className="text-left">
//                 <div className="text-amber-400 text-lg tracking-wider">★★★★★</div>
//                 <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{reviews.length} Verified Reviews</p>
//               </div>
//             </div>

//             <button
//               onClick={() => setShowModal(true)}
//               className="px-5 py-2.5 bg-[#0e623b] hover:bg-[#0b4d2e] dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 text-white font-bold rounded-xl text-xs transition-all shadow-md"
//             >
//               + Write a Review
//             </button>
//           </div>
//         </div>

//         {/* Reviews Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {reviews.map((rev) => (
//             <div
//               key={rev.id}
//               className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
//             >
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between">
//                   <div className="text-amber-400 text-sm">
//                     {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
//                   </div>
//                   {rev.verified && (
//                     <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-[#0e623b] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
//                       ✓ Verified Client
//                     </span>
//                   )}
//                 </div>

//                 <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
//                   "{rev.comment}"
//                 </p>
//               </div>

//               <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
//                 <div>
//                   <h4 className="font-bold text-slate-900 dark:text-white">{rev.clientName}</h4>
//                   <p className="text-[11px] text-slate-500 dark:text-slate-400">{rev.roleOrOrganization}</p>
//                 </div>
//                 <span className="text-[10px] text-slate-400">{rev.serviceProvided}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Review Submission Modal */}
//         {showModal && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
//             <div className="w-full max-w-lg p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl relative space-y-5">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-xl font-bold text-slate-900 dark:text-white">Leave Your Review</h3>
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-lg font-bold"
//                 >
//                   ✕
//                 </button>
//               </div>

//               {submitted ? (
//                 <div className="text-center py-8 space-y-2">
//                   <span className="text-3xl">🎉</span>
//                   <h4 className="text-lg font-bold text-slate-900 dark:text-white">Thank You!</h4>
//                   <p className="text-xs text-slate-600 dark:text-slate-400">
//                     Your rating and review have been recorded successfully.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleReviewSubmit} className="space-y-4">
//                   <div>
//                     <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
//                       Your Name / Company Name
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={newReview.clientName}
//                       onChange={(e) => setNewReview({ ...newReview, clientName: e.target.value })}
//                       className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-slate-100"
//                       placeholder="e.g. Jane Doe or ABC Academy"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
//                       Role / Location
//                     </label>
//                     <input
//                       type="text"
//                       value={newReview.roleOrOrganization}
//                       onChange={(e) => setNewReview({ ...newReview, roleOrOrganization: e.target.value })}
//                       className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-slate-100"
//                       placeholder="e.g. School Administrator, Nairobi"
//                     />
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
//                         Rating Score
//                       </label>
//                       <select
//                         value={newReview.rating}
//                         onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
//                         className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-slate-100"
//                       >
//                         <option value={5}>5 ★★★★★ (Excellent)</option>
//                         <option value={4}>4 ★★★★☆ (Very Good)</option>
//                         <option value={3}>3 ★★★☆☆ (Average)</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
//                         Service Provided
//                       </label>
//                       <input
//                         type="text"
//                         value={newReview.serviceProvided}
//                         onChange={(e) => setNewReview({ ...newReview, serviceProvided: e.target.value })}
//                         className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-slate-100"
//                         placeholder="e.g. CCTV Installation"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
//                       Your Feedback / Comment
//                     </label>
//                     <textarea
//                       rows={3}
//                       required
//                       value={newReview.comment}
//                       onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//                       className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-slate-100"
//                       placeholder="Share your experience working with Hiloster Technologies..."
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full py-3 bg-[#0e623b] hover:bg-[#0b4d2e] dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 font-bold text-white rounded-xl text-xs transition-all shadow-md"
//                   >
//                     Submit Review ↗
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }

'use client';

import { useState, FormEvent } from 'react';
import { INITIAL_REVIEWS, Review } from '@/data/reviews';
import { services } from '@/lib/data';

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [showModal, setShowModal] = useState(false);
  const [newReview, setNewReview] = useState({
    clientName: '',
    roleOrOrganization: '',
    rating: 5,
    serviceProvided: services[0]?.title || 'Web Design & Development',
    comment: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleReviewSubmit = (e: FormEvent) => {
    e.preventDefault();
    const created: Review = {
      id: `review-${Date.now()}`,
      clientName: newReview.clientName,
      roleOrOrganization: newReview.roleOrOrganization || 'Client',
      rating: Number(newReview.rating),
      comment: newReview.comment,
      serviceProvided: newReview.serviceProvided,
      verified: false,
      date: new Date().toISOString().split('T')[0],
    };

    setReviews([created, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setNewReview({
        clientName: '',
        roleOrOrganization: '',
        rating: 5,
        serviceProvided: services[0]?.title || 'Web Design & Development',
        comment: '',
      });
    }, 2000);
  };

  const aggregateRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  ).toFixed(1);

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hiloster Technologies",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating,
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.clientName },
      datePublished: r.date,
      reviewBody: r.comment,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating.toString(),
        bestRating: "5",
      },
    })),
  };

  return (
    <section className="py-12 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="space-y-10">
        
        {/* Header & Overall Score */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/80 text-amber-700 dark:text-amber-400 text-xs font-bold">
              <span>★ VERIFIED CLIENT FEEDBACK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Client Reviews & Ratings
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Read verified testimonials from educational institutions, clinics, and businesses across Kenya.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-3 flex-shrink-0">
            <div className="flex items-center space-x-3">
              <span className="text-4xl font-black text-slate-900 dark:text-white">{aggregateRating}</span>
              <div className="text-left">
                <div className="text-amber-400 text-lg tracking-wider">★★★★★</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{reviews.length} Verified Reviews</p>
              </div>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="px-5 py-2.5 bg-[#0e623b] hover:bg-[#0b4d2e] dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 text-white font-bold rounded-xl text-xs transition-all shadow-md"
            >
              + Write a Review
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-amber-400 text-sm">
                    {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
                  </div>
                  {rev.verified && (
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-[#0e623b] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                      ✓ Verified Client
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{rev.clientName}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{rev.roleOrOrganization}</p>
                </div>
                <span className="text-[10px] text-slate-400">{rev.serviceProvided}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Review Submission Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <div className="w-full max-w-lg p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl relative space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Leave Your Review</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-2">
                  <span className="text-3xl">🎉</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Thank You!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Your rating and review have been recorded successfully.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Name / Company Name
                    </label>
                    <input
                      type="text"
                      required
                      value={newReview.clientName}
                      onChange={(e) => setNewReview({ ...newReview, clientName: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-slate-100"
                      placeholder="e.g. Jane Doe or ABC Academy"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Role / Location
                    </label>
                    <input
                      type="text"
                      value={newReview.roleOrOrganization}
                      onChange={(e) => setNewReview({ ...newReview, roleOrOrganization: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-slate-100"
                      placeholder="e.g. School Administrator, Nairobi"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Rating Score
                      </label>
                      <select
                        value={newReview.rating}
                        onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-slate-100"
                      >
                        <option value={5}>5 ★★★★★ (Excellent)</option>
                        <option value={4}>4 ★★★★☆ (Very Good)</option>
                        <option value={3}>3 ★★★☆☆ (Average)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Service Provided
                      </label>
                      <select
                        value={newReview.serviceProvided}
                        onChange={(e) => setNewReview({ ...newReview, serviceProvided: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      >
                        {services.map((s) => (
                          <option key={s.title} value={s.title} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Feedback / Comment
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-slate-100"
                      placeholder="Share your experience working with Hiloster Technologies..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0e623b] hover:bg-[#0b4d2e] dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 font-bold text-white rounded-xl text-xs transition-all shadow-md"
                  >
                    Submit Review ↗
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}