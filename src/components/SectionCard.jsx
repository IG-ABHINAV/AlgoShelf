import { motion } from "framer-motion";

function SectionCard({
  title,
  subtitle,
  icon: Icon,
  children,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      {(title || subtitle) && (
        <div className="mb-6 flex items-start gap-4">
          {Icon && (
            <div className="rounded-2xl bg-blue-100 p-3">
              <Icon className="text-blue-600" size={22} />
            </div>
          )}

          <div>
            {title && (
              <h2 className="text-2xl font-bold text-slate-800">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-1 text-slate-500">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}

      {children}
    </motion.section>
  );
}

export default SectionCard;