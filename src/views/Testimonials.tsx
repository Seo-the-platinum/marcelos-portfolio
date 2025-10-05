import Testimonial from "../components/testimonial";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Marcelo is such a great actor! His voice has a unique emotional quality that's incredibly special!",
      company: "Imagine Learning Studios",
      project: "Sabado Gigante"
    },
    {
      quote: "Marcelo was easy to work with, delivered on-time, and was clearly thoughtful in his delivery. Easy 5 stars!",
      company: "Zach Williams",
      project: "E-learning Lawfirm"
    },
    {
      quote: `This was phenomenal! It was a blast just listening to 9 minutes of you bringing the character to life. I also really loved your improvised chuckles here and there; it really helped me "feel" the character. Thank you so much!!`,
      company: "Disko Praphanchith",
      project: "Ongoing Project"
    }
  ];

  return (
    <div className="flex flex-col gap-8 p-8">
        <h3 className="text-5xl font-semibold">Testimonials</h3>
        <div className="flex flex-col md:flex-row gap-8 md:items-start">
            {testimonials.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial} />
            ))}
        </div>
    </div>
  );
};

export default Testimonials;