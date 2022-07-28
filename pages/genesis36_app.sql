-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 14, 2022 at 01:21 PM
-- Server version: 5.7.38-cll-lve
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `genesis36_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(250) NOT NULL,
  `userid` varchar(250) NOT NULL,
  `product_id` varchar(250) NOT NULL,
  `price` varchar(250) NOT NULL,
  `qty` varchar(200) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `userid`, `product_id`, `price`, `qty`, `status`, `created_at`) VALUES
(10, '20285485-1986772-930711696', '2', '40000', '2', 1, '2022-07-01 12:22:28.064454'),
(11, '20285485-1986772-930711696', '3', '20000', '1', 1, '2022-07-01 12:22:40.787448'),
(13, '49900816-78222568-74957914', '3', '60000', '3', 1, '2022-07-03 08:05:09.481342'),
(14, '49900816-78222568-74957914', '1', '60000', '3', 1, '2022-07-03 08:05:26.017936'),
(15, '20285485-1986772-930711696', '1', '40000', '2', 0, '2022-07-07 10:57:20.756312');

-- --------------------------------------------------------

--
-- Table structure for table `kyc`
--

CREATE TABLE `kyc` (
  `id` int(200) NOT NULL,
  `userid` varchar(250) NOT NULL,
  `account_statement` varchar(250) NOT NULL,
  `remita` varchar(200) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `income` varchar(20) NOT NULL,
  `family_num` int(4) NOT NULL,
  `status` int(200) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kyc`
--

INSERT INTO `kyc` (`id`, `userid`, `account_statement`, `remita`, `gender`, `income`, `family_num`, `status`, `created_at`) VALUES
(2, '20285485-1986772-930711696', '', '555555555555555', 'Male', '800000', 3, 1, '2022-07-01 10:07:01.450629'),
(3, '49900816-78222568-74957914', '', '', '', '', 0, 0, '2022-07-02 13:03:43.693856'),
(4, '72433289-16018784-867577631', '', '', 'Male', '350000', 1, 0, '2022-07-07 17:11:37.971938');

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` int(200) NOT NULL,
  `package_name` varchar(250) NOT NULL,
  `package_description` varchar(250) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `package_name`, `package_description`, `created_at`) VALUES
(3, 'Single Package', 'Single Package', '0000-00-00 00:00:00.000000'),
(4, 'Family of Two', 'Family of Two', '0000-00-00 00:00:00.000000'),
(5, 'Family of Three', 'Family of Three', '0000-00-00 00:00:00.000000'),
(6, 'Family of Four', 'Family of Four', '0000-00-00 00:00:00.000000');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(200) NOT NULL,
  `product_name` varchar(250) NOT NULL,
  `price` varchar(250) NOT NULL,
  `product_desc` varchar(250) NOT NULL,
  `discount` int(200) NOT NULL,
  `color` varchar(200) NOT NULL,
  `package_id` varchar(200) NOT NULL,
  `image` varchar(250) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `price`, `product_desc`, `discount`, `color`, `package_id`, `image`, `created_at`) VALUES
(1, '20KG bags of Rice', '20000', '20KG bags of Rice', 0, '', '3', 'https://wosiwosi.co.uk/wp-content/uploads/2018/06/WW-186.jpg', '0000-00-00 00:00:00.000000'),
(2, '5 Litres of Oil', '20000', '20KG bags of Rice', 0, '', '4', 'https://images.yaoota.com/PIfWg9m9th1n2fCMLqskUihiyHM=/trim/yaootaweb-production-ng/media/crawledproductimages/e33b4a6e52a24b110f5c17d216e0028ed00e1458.jpg', '0000-00-00 00:00:00.000000'),
(3, '5 Litres of Palm oil', '20000', '20KG bags of Rice', 0, '', '5', 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/Y/79389_1528408606.jpg', '0000-00-00 00:00:00.000000');

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` int(200) NOT NULL,
  `userid` varchar(50) NOT NULL,
  `package_` varchar(30) NOT NULL,
  `price` varchar(200) NOT NULL,
  `status` int(20) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `userid`, `package_`, `price`, `status`, `created_at`) VALUES
(2, '20285485-1986772-930711696', '3', '20000', 0, '2022-07-01 10:11:11.271413');

-- --------------------------------------------------------

--
-- Table structure for table `token`
--

CREATE TABLE `token` (
  `id` int(200) NOT NULL,
  `token` text NOT NULL,
  `user_id` varchar(250) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `token`
--

INSERT INTO `token` (`id`, `token`, `user_id`, `created_at`) VALUES
(30, '6463626636303537646638336266323131326430363031396562666566653366', '93241587-88688239-177555504', '2022-07-14 12:06:01.358205'),
(14, '3235383763663034366166343664363163333436613261333732353065343263', '62340664-26962657-910085717', '2022-07-01 20:32:33.919882'),
(21, '3736353735323963643831306436633662393439626130663638356334333439', '49900816-78222568-74957914', '2022-07-02 12:11:43.649011'),
(31, '6633353762313137396632386332663335626165643866393766646364316131', '20285485-1986772-930711696', '2022-07-14 12:09:48.925771'),
(24, '3033646130616564356630656232633966653837623036313035663733393330', '72433289-16018784-867577631', '2022-07-07 17:06:13.777876'),
(25, '3065326531366263366565336431613866636430323761383763613338663435', '72433289-16018784-867577631', '2022-07-07 17:06:13.777954'),
(26, '3566333862613738363538613734323165653738353333666562366336623062', '72433289-16018784-867577631', '2022-07-07 17:06:13.777936');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(200) NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `user_id` varchar(200) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `phone`, `password`, `user_id`, `created_at`) VALUES
(2, 'Omoniyi', 'Owoeye', 'wmcinlets@gmail.com', '08157948955', '860484196da45d135086775e02178eb6', '20285485-1986772-930711696', '2022-06-29 13:36:26.199911'),
(3, '', '', 'omonicksonowoeye@gmail.com', '09135403118', 'b337db9e380aa14803fc475b94ea03d4', '93241587-88688239-177555504', '2022-07-01 20:30:06.491823'),
(4, 'Owoeye', 'Omoniyi', 'worldeston@gmail.com', '09135403118', 'b337db9e380aa14803fc475b94ea03d4', '62340664-26962657-910085717', '2022-07-01 20:32:10.792570'),
(5, 'Morakinyo', 'Oluwadara', 'encorelogistics06@gmail.com', '08103200200', '3e86af415706f5abc68b9de21bdd0cda', '59233065-23928905-574595782', '2022-07-02 12:09:52.037913'),
(6, 'Morakinyo', 'Oluwadara', 'morakinyodara@gmail.com', '08103200200', '3e86af415706f5abc68b9de21bdd0cda', '49900816-78222568-74957914', '2022-07-02 12:11:29.196740'),
(7, 'Babatunde', 'Famuyide', 'tundefamuyide@live.com', '07088518016', 'e6816d66e90afabbed5663cf80e7fbd0', '72433289-16018784-867577631', '2022-07-07 16:10:57.171978');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kyc`
--
ALTER TABLE `kyc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `kyc`
--
ALTER TABLE `kyc`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `token`
--
ALTER TABLE `token`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
