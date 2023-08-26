import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How much cost Neurafox?",
    answer:
      "Kick off at no cost! Begin with our complimentary tier that lets you develop a single app with a limit of 4 versions. When you're ready for more, elevate to our Premium package at just $29 monthly (or an annual rate of $240) for limitless app creation. Dive into specifics on our cost breakdown page.",
  },
  {
    question: "Can I make my apps Private?",
    answer: "Upon opting for a Pro subscription, your apps automatically enjoy a private status",
  },
  {
    question: "What is the difference between the free and paid versions?",
    answer: "The free version of Neurafox lets you create a single app with a limit of 4 versions. The paid version lets you create unlimited apps and versions.",
  },
  {
    question: "Can I use the code generated for commercial purposes?",
    answer: "Indeed, the code and app output from Neurafox are yours to utilize for any intent, even commercially. It falls upon you to confirm your Neurafox usage aligns with all pertinent legal standards. It's worth noting that NeuraFox retains the discretion to leverage the code as needed. Also, refrain from using NeuraFox-produced code/apps to create a mirroring or rival solution.",
  },
  {
    question: "Can Neurafox generate apps for Android and iOS?",
    answer: "No, NeuraFox strictly produces web applications. These applications are adaptable and can be accessed via mobile or desktop browsers. Yet, they aren't designed to operate as native apps on Android or iOS.",
  },
  {
    question: "Are there limits to the paid plan?",
    answer: "As of now, there's no cap on the apps or versions you craft. Likewise, the scalability of the MetaGPT app is boundless. We aim for your apps to gain widespread popularity, and thus, the expenses for ChatGPT queries are enveloped in your package. Still, we might consider introducing constraints down the road.",
  },
  {
    question: "How can I cancel my subscription? Can I cancel my subscription at any time?",
    answer: "Indeed, feel free to terminate your subscription whenever you wish by accessing the Stripe client portal here. You'll retain the Pro perks up to the closure of your billing period. For further control over your subscription, select the manage subscription option located at the top section of the page.",
  },
  {
    question: "What is your refund policy?",
    answer: "We provide a 7-day refund assurance. If Neurafox doesn't meet your expectations, simply seek a refund within the initial 7 days from your subscription's commencement. It's a hassle-free process. We process refund queries within two days. Beyond the 7 days, you're free to terminate your subscription whenever you desire; however, pro rata refunds aren't an option, and you'll continue enjoying Pro benefits until your billing cycle concludes.",
  },
  {
    question: "How can I delete my account?",
    answer: "Indeed, feel free to terminate your subscription whenever you wish by accessing the Stripe client portal here. You'll retain the Pro perks up to the closure of your billing period. For further control over your subscription, select the manage subscription option located at the top section of the page.",
  },
  // More questions...
]

export default function Example() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
