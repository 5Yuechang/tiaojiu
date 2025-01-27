﻿import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Github, Heart } from "lucide-react";

const AboutPage = () => {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            <Card className="bg-card">
                <CardContent className="pt-6">
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">关于项目</h2>
                            <p className="text-muted-foreground">
                                这是一个帮助鸡尾酒爱好者快速找到感兴趣配方的小工具。你可以通过选择自己拥有的原料，
                                快速找到可以调制的鸡尾酒。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">关于作者</h2>
                            <p className="text-muted-foreground">
                                希望通过这个工具帮助更多人探索鸡尾酒的世界。
                                目前还在不断的修bug和添加配方，如果你希望加入这个项目也请联系我。
                                如果你对项目有任何建议或者发现了问题，欢迎联系我或在 GitHub 上提出 issue。
                                如果部分配方侵犯了您的权益，请联系我我会删除。
                                联系方式：7san7er4034048@gmail.com
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">致谢</h2>
                            <div className="space-y-2 text-muted-foreground">
                                <p>感谢列表：</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>React - 用户界面框架</li>
                                    <li>Tailwind CSS - 样式框架</li>
                                    <li>Shadcn/ui - UI 组件库</li>
                                    <li>各位分享配方和教程的调酒师</li>
                                    <li>云游君</li>
                                </ul>
                            </div>
                        </section>

                        <footer className="pt-6 flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-2">
                                <span>Made with</span>
                                <Heart className="w-4 h-4 text-red-500" />
                                <span>by Y5targazer and RayBruin</span>
                            </div>

                            <a
                                href="https://github.com/yourusername/project"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Github className="w-5 h-5" />
                                <span>GitHub</span>
                            </a>
                        </footer>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AboutPage;