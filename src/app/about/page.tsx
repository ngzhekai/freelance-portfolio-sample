import Section from "@/components/Section";
import Layout from "@/components/layouts/article";

const P = ({ children }: any) => {
    return <p className="mb-5 text-justify text-sm">{children}</p>;
};

export default function Aboutpage() {
    return (
        <Layout title="About Me">
            <div className="min-h-screen p-9">
                <Section className="rounded-lg bg-base-200/60">
                    <div className="flex justify-center px-2 py-20 text-center">
                        <div className="max-w-md ">
                            <h1 className="mb-5 text-3xl font-bold">
                                Hello there
                            </h1>
                            <Section delay={0.2}>
                                <P>
                                    Lorem ipsum dolor sit amet, officia
                                    excepteur ex fugiat reprehenderit enim
                                    labore culpa sint ad nisi Lorem pariatur
                                    mollit ex esse exercitation amet. Nisi anim
                                    cupidatat excepteur officia. Reprehenderit
                                    nostrud nostrud ipsum Lorem est aliquip amet
                                    voluptate voluptate dolor minim nulla est
                                    proident. Nostrud officia pariatur ut
                                    officia. Sit irure elit esse ea nulla sunt
                                    ex occaecat reprehenderit commodo officia
                                    dolor Lorem duis laboris cupidatat officia
                                    voluptate. Culpa proident adipisicing id
                                    nulla nisi laboris ex in Lorem sunt duis
                                    officia eiusmod. Aliqua reprehenderit
                                    commodo ex non excepteur duis sunt velit
                                    enim. Voluptate laboris sint cupidatat
                                    ullamco ut ea consectetur et est culpa et
                                    culpa duis.
                                </P>
                            </Section>
                            <Section delay={0.4}>
                                <P>
                                    Lorem ipsum dolor sit amet, officia
                                    excepteur ex fugiat reprehenderit enim
                                    labore culpa sint ad nisi Lorem pariatur
                                    mollit ex esse exercitation amet. Nisi anim
                                    cupidatat excepteur officia. Reprehenderit
                                    nostrud nostrud ipsum Lorem est aliquip amet
                                    voluptate voluptate dolor minim nulla est
                                    proident. Nostrud officia pariatur ut
                                    officia. Sit irure elit esse ea nulla sunt
                                    ex occaecat reprehenderit commodo officia
                                    dolor Lorem duis laboris cupidatat officia
                                    voluptate. Culpa proident adipisicing id
                                    nulla nisi laboris ex in Lorem sunt duis
                                    officia eiusmod. Aliqua reprehenderit
                                    commodo ex non excepteur duis sunt velit
                                    enim. Voluptate laboris sint cupidatat
                                    ullamco ut ea consectetur et est culpa et
                                    culpa duis.
                                </P>
                            </Section>
                        </div>
                    </div>
                </Section>
            </div>
        </Layout>
    );
}
