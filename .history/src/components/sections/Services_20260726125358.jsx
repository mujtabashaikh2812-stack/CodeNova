import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceItem from "./ServiceItem";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm uppercase tracking-[0.35em] text-slate-500">
            What We Do
          </span>

          <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-tight text-white">
            Building digital products
            <br />
            for ambitious businesses.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            From strategy and design to development and deployment,
            CodeNova delivers digital solutions that help businesses
            innovate, scale, and stay ahead.
          </p>
        </motion.div>

        <div className="mt-20">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              {...service}
            />
          ))}
        </div>

      </div>
    </section>
  );
}