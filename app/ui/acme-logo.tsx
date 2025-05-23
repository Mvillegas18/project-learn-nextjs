import { lusitanaFont } from '@/app/ui/fonts';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
	return (
		<div
			className={`${lusitanaFont.className} flex flex-row items-center leading-none text-white`}
		>
			<GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
			<p className="text-[44px]">Acme</p>
		</div>
	);
}
